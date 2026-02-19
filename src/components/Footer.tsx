import { ChevronDown, Linkedin, Twitter, Volleyball } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="hidden md:block">
        <div className="py-10 px-10 xl:py-20 xl:px-30">
          <div>
            <img
              src="https://ik.imagekit.io/wq68aygdr/attio/logo/attio_logo-light.png"
              alt="attio"
              className="w-30"
            />
          </div>

          <div className="pt-5 flex flex-row flex-wrap xl:flex-nowrap gap-10 xl:gap-35 justify-between xl:justify-start">
            <div className="flex flex-col gap-3 text-footer-text">
              <h3 className="text-footer-title">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Customer stories</a>
                </li>
                <li>
                  <a>Security</a>
                </li>
                <li>
                  <a>Chrome Extension</a>
                </li>
                <li>
                  <a>IOS App</a>
                </li>
                <li>
                  <a>Android App</a>
                </li>
                <li>
                  <a>Zapier</a>
                </li>
                <li>
                  <a>Integromat</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-footer-text">
              <h3 className="text-footer-title">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Carrer</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>StartUp program</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-footer-text">
              <h3 className="text-footer-title">Attio for</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a>Start Up</a>
                </li>
                <li>
                  <a>Dear Flow</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-footer-text">
              <h3 className="text-footer-title">Support</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a>Help Center</a>
                </li>
                <li>
                  <a>Talk to Support</a>
                </li>
                <li>
                  <a>API Docs</a>
                </li>
                <li>
                  <a>System Status</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-footer-title">Ready to Build?</h3>
              <div className="flex flex-col gap-3 text-white">
                <button className="py-4 px-25 bg-footer-button rounded-xl w-full">
                  Start for free
                </button>
                <button className="py-4 px-25 border border-footer-button rounded-xl w-full">
                  Talk to sales
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-20 text-footer-text w-full p-0 " />
        <div className="px-10 xl:px-30 py-7 flex flex-row justify-between pb-15 text-sm">
          <p className="text-footer-text">
            © 2025 Attio Ltd. All rights reserved.
          </p>
          <div className="flex flex-row gap-5 text-footer-text">
            <p>
              <a>Terms and Conditions</a> | <a> privacy policy</a>
            </p>
            <div className="flex flex-row gap-3">
              <Twitter />
              <Volleyball />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 md:hidden">
        <div className="flex flex-row justify-between">
          <img
            src="https://ik.imagekit.io/wq68aygdr/attio/logo/attio_logo-light.png"
            alt="attio"
            className="w-20"
          />
          <div className="flex flex-row gap-2 text-white">
            <Twitter />
            <Volleyball />
            <Linkedin />
          </div>
        </div>

        <div className="p-5">
          <ul className="flex flex-col gap-3">
            <li className="p-3 flex justify-between bg-footer-button rounded-xl">
              <a>Product</a> <ChevronDown />{" "}
            </li>
            <li className="p-3 flex justify-between bg-footer-button rounded-xl">
              <a>Company</a> <ChevronDown />{" "}
            </li>
            <li className="p-3 flex justify-between bg-footer-button rounded-xl">
              <a>Attio for</a> <ChevronDown />{" "}
            </li>
            <li className="p-3 flex justify-between bg-footer-button rounded-xl">
              <a>Support</a> <ChevronDown />{" "}
            </li>
          </ul>

          <div className="flex flex-col gap-3 mt-5 text-xs items-center justify-center">
            <p className="text-footer-text">
              © 2025 Attio Ltd. All rights reserved.
            </p>
            <div className="flex flex-row gap-5 text-footer-text">
              <p>
                <a>Terms and Conditions</a> | <a> privacy policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
