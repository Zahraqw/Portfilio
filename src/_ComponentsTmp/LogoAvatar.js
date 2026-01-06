const LogoAvatar = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-full bg-indigo-50"
    >
      {/* Background */}
      <circle cx="110" cy="110" r="100" fill="#EEF2FF" />

      {/* Head */}
      <circle cx="110" cy="85" r="35" fill="#FCD5B5" />

      {/* Hair */}
      <path d="M75 85c0-25 20-40 35-40s35 15 35 40v10H75V85z" fill="#1F2937" />

      {/* Body */}
      <rect x="65" y="120" width="90" height="60" rx="30" fill="#6366F1" />
    </svg>
  );
};

export default LogoAvatar;
