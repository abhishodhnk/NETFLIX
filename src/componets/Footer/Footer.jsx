import React from "react";
import styles from "./styles.module.scss";

function Footer2() {
  return (
    <div className="bg-black text-[#808080] p-6 text-sm">
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <ul className={styles.details}>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Legal Notices</li>
          </ul>

          <div className={styles.security}>
            <div>🌐 English</div>
            <span>Netflix India</span>
            <span>© 2024-2025 Abhishodh N K</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer2;
