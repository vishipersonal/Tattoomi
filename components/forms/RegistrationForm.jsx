"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";
// import LoadingScreen from "../ui/loadingscreen";
// import AllAlerts from "../toasts/allalerts";

const styles = {
    formContainer:
        "relative w-10/12 text-shadow-sm text-shadow-stone-500 flex sm:flex-row flex-col justify-start sm:items-start items-end gap-2 p-2",
    shortLabel:
        "relative sm:w-1/4 w-3/4 px-5 py-0.5 shadow rounded-2xl shadow-stone-500 sm:text-end text-start",
    input:
        "relative outline-none shadow-inner shadow-stone-500 rounded-2xl px-2 w-full text-shadow-2xs text-shadow-stone-500",
    inputWrapper:
        "relative sm:w-3/4 w-full px-5 py-1 shadow rounded-2xl shadow-stone-500 flex gap-4",
};

const initialForm = {
    userType: "General",
    fullName: "",
    userEmail: "",
    userName: "",
    userMobile: "",
    password: "",
    profilePic: "",
    artField: [],
    styleTags: "",
    about: "",
};

const RegistrationForm = () => {
    const [formData, setFormData] = useState(initialForm);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMultiSelect = (e) => {
        const values = Array.from(e.target.selectedOptions, (opt) => opt.value);
        setFormData((prev) => ({ ...prev, artField: values }));
    };

    const uploadProfilePic = async () => {
        if (!selectedFile) return null;
        const uploaded = await upload(selectedFile.name, selectedFile, {
            access: "public",
            handleUploadUrl: "/api/imagefiles/upload",
        });
        return uploaded?.url || null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMessage("");

        const { fullName, userEmail, userName, userMobile, password, userType } =
            formData;

        if (!fullName || !userEmail || !userName || !userMobile || !password) {
            setAlertMessage("⚠️ Please enter all required details");
            return;
        }

        if (userType === "Artist") {
            if (formData.artField.length === 0) {
                setAlertMessage("⚠️ Please select at least one Art Field");
                return;
            }
            if (!formData.styleTags) {
                setAlertMessage("⚠️ Please enter Style Tags");
                return;
            }
        }

        setLoading(true);
        try {
            let imageUrl = formData.profilePic;
            if (selectedFile) {
                imageUrl = await uploadProfilePic();
                if (!imageUrl) throw new Error("Profile picture upload failed");
            }

            const res = await fetch("/api/usersregistration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    userName: formData.userName.startsWith("@")
                        ? formData.userName
                        : "@" + formData.userName,
                    profilePic: imageUrl,
                    artField: formData.userType === "Artist" ? formData.artField : [],
                    styleTags:
                        formData.userType === "Artist"
                            ? formData.styleTags.split(",").map((t) => t.trim())
                            : [],
                    about: formData.userType === "Artist" ? formData.about : "",
                }),
            });

            if (res.ok) {
                setAlertMessage("✅ Account created successfully, please sign in");
                setFormData(initialForm);
                setSelectedFile(null);
                setTimeout(() => router.push("/signin"), 1500);
            } else {
                const error = await res.json().catch(() => ({}));
                setAlertMessage("❌ Error: " + (error.message || "Failed to register"));
            }
        } catch (err) {
            console.error(err);
            setAlertMessage("❌ Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!alertMessage) return;
        const timer = setTimeout(() => setAlertMessage(""), 3000);
        return () => clearTimeout(timer);
    }, [alertMessage]);

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="relative w-11/12 max-w-2xl fancyFont2 mx-auto text-lg flex flex-col justify-center items-center my-7 border-b"
            >
                <p className="relative text-2xl text-shadow-sm text-shadow-stone-500 mb-5">
                    Create your account
                </p>

                {/* User Type */}
                <div className={styles.formContainer}>
                    <p className={`${styles.shortLabel} self-start`}>User Type</p>
                    <div className={styles.inputWrapper}>
                        {["General", "Artist"].map((type) => (
                            <label key={type}>
                                <input
                                    type="radio"
                                    name="userType"
                                    value={type}
                                    checked={formData.userType === type}
                                    onChange={handleChange}
                                    id="userType"
                                />{" "}
                                {type}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Full Name */}
                <Field
                    id="fullName"
                    label="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                {/* Email */}
                <Field
                    id="userEmail"
                    label="Email"
                    value={formData.userEmail}
                    onChange={handleChange}
                    type="email"
                />

                {/* Username */}
                <Field
                    id="userName"
                    label="Username"
                    value={formData.userName}
                    onChange={handleChange}
                />

                {/* Mobile */}
                <Field
                    id="userMobile"
                    label="Mobile Number"
                    value={formData.userMobile}
                    onChange={handleChange}
                    type="tel"
                />

                {/* Password */}
                <Field
                    id="password"
                    label="Password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                />

                {/* Profile Pic */}
                <div className={styles.formContainer}>
                    <label htmlFor="profilePic" className={`${styles.shortLabel} self-start`}>
                        Profile Pic
                    </label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="file"
                            id="profilePic"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file && file.size > 2 * 1024 * 1024) {
                                    setAlertMessage("⚠️ File size must be less than 2MB");
                                    e.target.value = "";
                                    setSelectedFile(null);
                                } else {
                                    setSelectedFile(file);
                                }
                            }}
                            className={styles.input}
                        />
                    </div>
                </div>

                {/* Artist Only Fields */}
                {formData.userType === "Artist" && (
                    <>
                        {/* Art Field */}
                        <div className={styles.formContainer}>
                            <p className={styles.shortLabel}>Art Fields</p>
                            <div className={styles.inputWrapper}>
                                <select
                                    id="artField"
                                    multiple
                                    value={formData.artField}
                                    onChange={handleMultiSelect}
                                    className={styles.input}
                                >
                                    {[
                                        "Tattoo Artist",
                                        "Sketch Artist",
                                        "Digital Artist",
                                        "Graphic Designer",
                                        "Mehndi Artist",
                                        "3d Modeling",
                                        "Photographer",
                                    ].map((field) => (
                                        <option key={field} value={field}>
                                            {field}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Style Tags */}
                        <Field
                            id="styleTags"
                            label="Style Tags"
                            placeholder="Enter tags separated by commas"
                            value={formData.styleTags}
                            onChange={handleChange}
                        />

                        {/* About */}
                        <Field
                            id="about"
                            label="About"
                            placeholder="Short description of user"
                            value={formData.about}
                            onChange={handleChange}
                            isTextarea
                        />
                    </>
                )}

                <button className="relative w-1/2 mt-2 max-w-2xs rounded-2xl shadow shadow-stone-500 text-shadow-sm text-shadow-stone-500">
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="relative w-full text-center my-5 px-8">
                    Already an Artist?{" "}
                    <Link href="/tattoomisignin" className="underline italic" title="Go to Signin Page">
                        Sign in
                    </Link>
                    .
                </p>
            </form>

            {loading && <LoadingScreen />}
            {alertMessage && <AllAlerts message={alertMessage} />}
        </>
    );
};

// Reusable Field Component
const Field = ({ id, label, value, onChange, type = "text", placeholder, isTextarea }) => (
    <div className={styles.formContainer}>
        <label htmlFor={id} className={styles.shortLabel}>
            {label}
        </label>
        <div className={styles.inputWrapper}>
            {isTextarea ? (
                <textarea
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${styles.input} min-h-[50px]`}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder || `Enter ${label}`}
                    value={value}
                    onChange={onChange}
                    className={styles.input}
                />
            )}
        </div>
    </div>
);

export default RegistrationForm;