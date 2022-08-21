import { useEffect } from "react";

import style from "./style.module.css";
import Link from "next/link";
import { Logo } from "../Header/Logo";
import { IoMdPin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let w;
  useEffect(() => {
    w = window;
  }, []);

  return (
    <div className={style["footer-container"]}>
      <div className={style["footer-address-section"]}>
        <Logo />
        <br />
        <ul>
          <li>
            <IoMdPin className={style["footer-address-section-icons"]} />
            19/1, Rajar Goli,
            <br /> Sylhet, Bangladesh
          </li>
          <li>
            <FaPhoneAlt className={style["footer-address-section-icons"]} /> +1
            +1-5437-829-4544
          </li>
          <li>
            <MdEmail className={style["footer-address-section-icons"]} />{" "}
            info@expertsportal.com
          </li>
        </ul>
      </div>

      <div className={style["footer-quick-link"]}>
        <p>Quick Links</p>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/services"> Services </Link>
          </li>
          <li>
            <Link href="/deshboard">Deshboard</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>


      <div className={style["footer-legal-section"]}>
        <p>Legal</p>
        <ul>
          <li>
            <Link href={"/policies"}> Privacy Policy </Link>
          </li>
          <li>
            <Link href={"/policies"}> cookie Policy </Link>
          </li>
          <li>
            <Link href={"/policies"}> Terms &#38; Conditions </Link>
          </li>
          <li>
            <Link href={"/policies"}> FAQ </Link>
          </li>
        </ul>
      </div>
      <div className={style["footer-copyrights-section"]}>
        <p className={style["footer-copyrights-section-text"]}>
          <AiOutlineCopyright
            className={style["footer-copyrights-section-icon"]}
          />
          Experts Portal. All rights reserved 2022
        </p>

        <div className={style["footer-social-icons-container"]}>
          <FaFacebookF
            onClick={() =>
              w.open("https://www.facebook.com/Afzal.Sohag007/", "__blank")
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
          <FaTwitter
            onClick={() =>
              w.open("https://www.facebook.com/Afzal.Sohag007/", "__blank")
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
          <FaInstagram
            onClick={() =>
              w.open("https://www.facebook.com/Afzal.Sohag007/", "__blank")
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
          <FaLinkedinIn
            onClick={() =>
              w.open(
                "https://www.linkedin.com/in/Afzal.Sohag007/",
                "__blank"
              )
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
