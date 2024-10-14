"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Get In Touch</h4>
          <hr className="border-glowinglime" />
          <p className="text-gray-400">
            Feel free to contact me via email or connect on my social media
            channels. Let&apos;s collaborate and build something great!
          </p>
          <div className="text-lg">
            <div className="flex justify-start items-center space-x-4">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 1024 1024"
                className="icon w-10 h-10"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M964.6 202.2L599.8 528.7c-48.4 43.3-121.6 43.3-169.9 0L65 202.2c-19 13.5-31.5 35.5-31.5 60.6v507c0 41.1 33.3 74.4 74.4 74.4h813.6c41.1 0 74.4-33.3 74.4-74.4v-507c0.2-25.1-12.3-47.1-31.3-60.6z"
                  fill="#9DC6AF"
                />
                <path
                  d="M921.7 857H108c-48.1 0-87.2-39.1-87.2-87.2v-507c0-28.1 13.8-54.6 36.8-71l8.3-5.9 372.5 333.3c43.6 39 109.3 39 152.8 0l372.5-333.3 8.3 5.9c23.1 16.4 36.8 43 36.8 71v507c0.1 48.1-39 87.2-87.1 87.2zM64.8 219.1c-11.6 11.5-18.3 27.2-18.3 43.7v507c0 34 27.6 61.6 61.6 61.6h813.6c34 0 61.6-27.6 61.6-61.6v-507c0-16.4-6.7-32.2-18.3-43.7L608.4 538.2c-53.3 47.7-133.7 47.7-187 0L64.8 219.1z"
                  fill="#191919"
                />
                <path
                  d="M429.9 503.9L65 830.4c12.2 8.6 26.9 13.8 43 13.8h813.6c16.1 0 30.8-5.2 43-13.8L599.8 503.9c-48.4-43.3-121.5-43.3-169.9 0z"
                  fill="#FAFCFB"
                />
                <path
                  d="M921.7 857H108c-18.1 0-35.5-5.6-50.4-16.2-3.2-2.3-5.2-5.8-5.4-9.7-0.2-3.9 1.3-7.7 4.2-10.3l364.8-326.5c53.3-47.7 133.7-47.7 187 0L973 820.8c2.9 2.6 4.5 6.4 4.2 10.3-0.2 3.9-2.2 7.5-5.4 9.7-14.6 10.6-32.1 16.2-50.1 16.2zM87.2 827.7c6.6 2.4 13.7 3.7 20.8 3.7h813.6c7.1 0 14.1-1.3 20.8-3.7L591.3 513.4c-43.6-39-109.3-39-152.8 0L87.2 827.7z"
                  fill="#0F0F0F"
                />
                <path
                  d="M599.8 579.9l364.8-375.6c-12.2-9.9-26.9-15.9-43-15.9H108c-16.1 0-30.8 6-43 15.9l364.8 375.6c48.5 49.8 121.6 49.8 170 0z"
                  fill="#FAFCFB"
                />
                <path
                  d="M514.8 630.1c-34.9 0-68.3-14.6-94.2-41.2L55.9 213.2c-2.5-2.6-3.8-6.1-3.6-9.7 0.2-3.6 1.9-6.9 4.7-9.2 15-12.3 32.7-18.8 51.1-18.8h813.6c18.4 0 36 6.5 51.1 18.8 2.8 2.3 4.5 5.6 4.7 9.2s-1.1 7.1-3.6 9.7L609 588.8c-25.8 26.6-59.3 41.3-94.2 41.3zM85.1 206.5l354 364.5c21 21.6 47.9 33.5 75.8 33.5s54.8-11.9 75.8-33.5l354-364.5c-7.3-3.5-15-5.4-22.9-5.4H108c-7.9 0.1-15.6 1.9-22.9 5.4z"
                  fill="#0F0F0F"
                />
                <path
                  d="M260.1 351.7c0-24.6 17.2-44.8 38.2-44.8 21 0 38.2 20.1 38.2 44.8"
                  fill="#FAFCFB"
                />
                <path
                  d="M336.6 364.5c-7.1 0-12.8-5.7-12.8-12.8 0-17.3-11.6-32-25.4-32-13.8 0-25.4 14.6-25.4 32 0 7.1-5.7 12.8-12.8 12.8-7.1 0-12.8-5.7-12.8-12.8 0-31.8 22.9-57.6 51.1-57.6 28.2 0 51.1 25.8 51.1 57.6-0.2 7.1-6 12.8-13 12.8z"
                  fill="#0F0F0F"
                />
                <path
                  d="M693.1 351.7c0-24.6 17.2-44.8 38.2-44.8 21 0 38.2 20.1 38.2 44.8"
                  fill="#FAFCFB"
                />
                <path
                  d="M769.6 364.5c-7.1 0-12.8-5.7-12.8-12.8 0-17.3-11.6-32-25.4-32-13.8 0-25.4 14.6-25.4 32 0 7.1-5.7 12.8-12.8 12.8s-12.8-5.7-12.8-12.8c0-31.8 22.9-57.6 51.1-57.6s51.1 25.8 51.1 57.6c-0.2 7.1-5.9 12.8-13 12.8z"
                  fill="#0F0F0F"
                />
                <path
                  d="M419.7 383.4c0 46.3 42.8 84.2 95.1 84.2s95.1-37.9 95.1-84.2v-28.1H419.7v28.1z"
                  fill="#5B5143"
                />
                <path
                  d="M514.8 480.4c-59.5 0-108-43.5-108-97v-28.1c0-7.1 5.7-12.8 12.8-12.8H610c7.1 0 12.8 5.7 12.8 12.8v28.1c0 53.5-48.4 97-108 97z m-82.3-112.3v15.3c0 18.7 8.4 36.4 23.6 49.9 15.7 13.9 36.5 21.5 58.7 21.5 22.2 0 43-7.6 58.7-21.5 15.2-13.5 23.6-31.2 23.6-49.9v-15.3H432.5z"
                  fill="#141414"
                />
                <path
                  d="M458.6 413a54.7 27.6 0 1 0 109.4 0 54.7 27.6 0 1 0-109.4 0Z"
                  fill="#D39E33"
                />
              </svg>
              <a
                href="mailto:saifmaamun@gmail.com"
                className="hover:text-glowinglime transition-all duration-300"
              >
                saifmaamun@gmail.com
              </a>
            </div>
          </div>
          <div className="text-lg">
            <div className="flex justify-start items-center space-x-4">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 1024 1024"
                className="icon w-10 h-10"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M696.2 1000.9H321c-46 0-83.3-37.3-83.3-83.3V103.9c0-46 37.3-83.3 83.3-83.3h375.2c46 0 83.3 37.3 83.3 83.3v813.7c0 46.1-37.3 83.3-83.3 83.3z"
                  fill="#9DC6AF"
                />
                <path
                  d="M692.2 1014.6H325c-55.6 0-100.9-45.3-100.9-100.9V107.9C224.1 52.3 269.4 7 325 7h367.2c55.6 0 100.9 45.3 100.9 100.9v805.8c0 55.6-45.2 100.9-100.9 100.9zM325 34.3c-40.6 0-73.6 33-73.6 73.6v805.8c0 40.6 33 73.6 73.6 73.6h367.2c40.6 0 73.6-33 73.6-73.6V107.9c0-40.6-33-73.6-73.6-73.6H325z"
                  fill="#191919"
                />
                <path d="M237.7 146.1h541.8v672.1H237.7z" fill="#FAFCFB" />
                <path
                  d="M779.5 831.8H237.7c-7.5 0-13.6-6.1-13.6-13.6V146.1c0-7.5 6.1-13.6 13.6-13.6h541.8c7.5 0 13.6 6.1 13.6 13.6v672.1c0 7.5-6.1 13.6-13.6 13.6z m-528.1-27.2h514.5V159.7H251.4v644.9z"
                  fill="#0F0F0F"
                />
                <path
                  d="M374.9 431.7m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M642.3 431.7m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M508.6 547.3c-36.1 0-65.5-28.6-65.5-63.8v-20.1c0-7.5 6.1-13.6 13.6-13.6s13.6 6.1 13.6 13.6v20.1c0 20.2 17.2 36.5 38.3 36.5s38.3-16.4 38.3-36.5v-20.1c0-7.5 6.1-13.6 13.6-13.6s13.6 6.1 13.6 13.6v20.1c0 35.1-29.4 63.8-65.5 63.8zM560.5 90.4H456.8c-7.5 0-13.6-6.1-13.6-13.6s6.1-13.6 13.6-13.6h103.7c7.5 0 13.6 6.1 13.6 13.6s-6.1 13.6-13.6 13.6z"
                  fill="#0F0F0F"
                />
                <path
                  d="M508.6 909.2m-37.9 0a37.9 37.9 0 1 0 75.8 0 37.9 37.9 0 1 0-75.8 0Z"
                  fill="#FAFCFB"
                />
                <path
                  d="M508.6 960.7c-28.4 0-51.5-23.1-51.5-51.5s23.1-51.5 51.5-51.5 51.5 23.1 51.5 51.5-23.1 51.5-51.5 51.5z m0-75.8c-13.4 0-24.3 10.9-24.3 24.3s10.9 24.3 24.3 24.3 24.3-10.9 24.3-24.3-10.9-24.3-24.3-24.3z"
                  fill="#0F0F0F"
                />
              </svg>
              <a
                href="tel:+8801305797595"
                className="hover:text-glowinglime transition-all duration-300"
              >
                +8801305797595
              </a>
            </div>
          </div>
          <div className="text-lg">
            <div className="flex justify-start items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="WhatsApp"
                role="img"
                className="w-10 h-10"
                viewBox="0 0 512 512"
              >
                <rect width="512" height="512" rx="15%" fill="#25d366" />
                <path
                  fill="#25d366"
                  stroke="#ffffff"
                  stroke-width="26"
                  d="M123 393l14-65a138 138 0 1150 47z"
                />
                <path
                  fill="#ffffff"
                  d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                />
              </svg>
              <a
                href="tel:+8801305797595"
                className="hover:text-glowinglime transition-all duration-300"
              >
                +8801305797595
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Quick Links</h4>
          <hr className="border-glowinglime" />
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-glowinglime transition-all duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-glowinglime transition-all duration-300"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold  text-white">Connect With Me</h4>
          <hr className="border-glowinglime" />
          <div className="flex-col space-y-2 align-middle it">
            {/* git */}
            <a
              href="https://github.com/saifmaamun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4  transition-all duration-300"
            >
              <svg
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 496"
              >
                <path
                  id="SVGCleanerId_0"
                  style={{ fill: "#3E77BF" }}
                  d="M247.992,5.163C111.048,5.163,0,116.627,0,254.163
	c0,109.992,71.048,203.32,169.632,236.24c12.392,2.296,16.912-5.392,16.912-12c0-5.904-0.216-21.56-0.336-42.344
	c-69,15.064-83.552-33.376-83.552-33.376c-11.264-28.768-27.52-36.408-27.52-36.408c-22.528-15.456,1.696-15.16,1.696-15.16
	c24.88,1.752,37.976,25.672,37.976,25.672c22.144,38.048,58.064,27.048,72.192,20.672c2.232-16.08,8.656-27.064,15.736-33.28
	c-55.056-6.296-112.944-27.64-112.944-123.04c0-27.176,9.656-49.408,25.52-66.832c-2.568-6.296-11.072-31.6,2.416-65.872
	c0,0,20.832-6.688,68.2,25.52c19.784-5.52,41-8.28,62.096-8.392c21.048,0.112,42.28,2.864,62.096,8.392
	c47.328-32.208,68.128-25.52,68.128-25.52c13.52,34.272,5.016,59.576,2.456,65.872c15.904,17.424,25.504,39.648,25.504,66.832
	c0,95.64-57.984,116.68-113.232,122.856c8.904,7.688,16.832,22.872,16.832,46.112c0,33.296-0.296,60.128-0.296,68.296
	c0,6.672,4.472,14.424,17.048,11.968C425.016,457.387,496,364.123,496,254.163C496,116.627,384.952,5.163,247.992,5.163z"
                />
                <g>
                  <path
                    id="SVGCleanerId_0_1_"
                    style={{ fill: "#3E77BF" }}
                    d="M247.992,5.163C111.048,5.163,0,116.627,0,254.163
		c0,109.992,71.048,203.32,169.632,236.24c12.392,2.296,16.912-5.392,16.912-12c0-5.904-0.216-21.56-0.336-42.344
		c-69,15.064-83.552-33.376-83.552-33.376c-11.264-28.768-27.52-36.408-27.52-36.408c-22.528-15.456,1.696-15.16,1.696-15.16
		c24.88,1.752,37.976,25.672,37.976,25.672c22.144,38.048,58.064,27.048,72.192,20.672c2.232-16.08,8.656-27.064,15.736-33.28
		c-55.056-6.296-112.944-27.64-112.944-123.04c0-27.176,9.656-49.408,25.52-66.832c-2.568-6.296-11.072-31.6,2.416-65.872
		c0,0,20.832-6.688,68.2,25.52c19.784-5.52,41-8.28,62.096-8.392c21.048,0.112,42.28,2.864,62.096,8.392
		c47.328-32.208,68.128-25.52,68.128-25.52c13.52,34.272,5.016,59.576,2.456,65.872c15.904,17.424,25.504,39.648,25.504,66.832
		c0,95.64-57.984,116.68-113.232,122.856c8.904,7.688,16.832,22.872,16.832,46.112c0,33.296-0.296,60.128-0.296,68.296
		c0,6.672,4.472,14.424,17.048,11.968C425.016,457.387,496,364.123,496,254.163C496,116.627,384.952,5.163,247.992,5.163z"
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#114C82" }}
                    d="M378.496,109.131c13.128,33.904,4.752,58.928,2.2,65.176c15.904,17.424,25.504,39.648,25.504,66.832
		c0,95.64-57.984,116.68-113.232,122.856c8.904,7.688,16.832,22.872,16.832,46.112c0,33.296-0.296,60.128-0.296,68.296
		c0,6.672,4.472,14.424,17.048,11.968C425.016,457.387,496,364.123,496,254.163c0-29.56-5.152-57.896-14.568-84.2
		C447.24,133.963,409.184,109.987,378.496,109.131z"
                  />
                  <path
                    style={{ fill: "#114C82" }}
                    d="M192.976,377.323c2.784-5.616,6.184-9.984,9.76-13.144c-30.176-3.456-61.168-11.512-83.048-33.744
		C136.52,358.451,163.928,371.195,192.976,377.323z"
                  />
                </g>
                <path
                  style={{ fill: "#6CA9EA" }}
                  d="M12.912,270.947c0-137.536,111.048-249,247.992-249c76.04,0,144.056,34.392,189.536,88.488
	C405.52,46.755,331.616,5.163,247.992,5.163C111.048,5.163,0,116.627,0,254.163c0,61.32,22.12,117.424,58.752,160.792
	C29.944,374.291,12.912,324.643,12.912,270.947z"
                />
                <path
                  style={{ fill: "#083E66" }}
                  d="M322.712,426.899c0-23.232-7.928-38.44-16.832-46.128c55.248-6.16,113.24-27.216,113.24-122.848
	c0-27.184-9.6-49.4-25.52-66.824c2.576-6.296,11.096-31.608-2.456-65.872c0,0-2.576-0.792-7.896-0.488
	c5.808,25.84-0.416,44.32-2.552,49.568c15.904,17.424,25.504,39.648,25.504,66.832c0,95.64-57.984,116.68-113.232,122.856
	c8.904,7.688,16.832,22.872,16.832,46.112c0,33.296-0.296,60.128-0.296,68.296c0,5.872,3.496,12.568,12.92,12.408
	C322.488,479.555,322.712,455.659,322.712,426.899z"
                />
                <path
                  style={{ fill: "#114C82" }}
                  d="M117.464,423.995c5.208,10.72,22.712,36.4,68.888,30.992c-0.064-5.648-0.112-11.976-0.144-18.928
	C150.584,443.835,129.552,434.667,117.464,423.995z"
                />
                <path
                  style={{ fill: "#6CA9EA" }}
                  d="M126.368,391.387c-1.592-2.4-4.576-6.472-8.904-10.544
	C120.272,385.011,123.256,388.507,126.368,391.387z"
                />
              </svg>
              <p>@saifmaamun</p>
            </a>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/saif-maamun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:text-glowinglime transition-all duration-300"
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 16 16"
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#0A66C2"
                  d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                />
              </svg>
              <p>@saif-maamun</p>
            </a>
            {/* x */}
            <a
              href="https://x.com/imsaifmaamun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:text-glowinglime transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                className="w-10 h-10"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="SVGID_1__IALWhfjB37gY_gr1"
                  x1="39.328"
                  x2="8.672"
                  y1="8.672"
                  y2="39.328"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#60affe"></stop>
                  <stop offset=".033" stop-color="#6ab4fe"></stop>
                  <stop offset=".197" stop-color="#97cbfe"></stop>
                  <stop offset=".362" stop-color="#bddeff"></stop>
                  <stop offset=".525" stop-color="#daecff"></stop>
                  <stop offset=".687" stop-color="#eef7ff"></stop>
                  <stop offset=".846" stop-color="#fbfdff"></stop>
                  <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <path
                  fill="url(#SVGID_1__IALWhfjB37gY_gr1)"
                  d="M36.5,40.5h-25c-2.209,0-4-1.791-4-4v-25c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v25	C40.5,38.709,38.709,40.5,36.5,40.5z"
                ></path>
                <path
                  fill="none"
                  stroke="#2e9bfe"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M40.5,31.5v5c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"
                ></path>
                <path
                  fill="none"
                  stroke="#2e9bfe"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M7.5,18.064V11.5c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"
                ></path>
                <path
                  fill="#2e9bfe"
                  d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563L28.587,32.304z"
                ></path>
                <polygon
                  fill="#2e9bfe"
                  points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                ></polygon>
                <polygon
                  fill="#2e9bfe"
                  points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                ></polygon>
              </svg>
              <p> @imsaifmaamun</p>
            </a>
            {/* instagram*/}
            <a
              href="https://www.instagram.com/desprdo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:text-glowinglime transition-all duration-300"
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                fill="none"
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint0_radial_87_7153)"
                />
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint1_radial_87_7153)"
                />
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint2_radial_87_7153)"
                />
                <path
                  d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                  >
                    <stop stop-color="#B13589" />
                    <stop offset="0.79309" stop-color="#C62F94" />
                    <stop offset="1" stop-color="#8A3AC8" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                  >
                    <stop stop-color="#E0E8B7" />
                    <stop offset="0.444662" stop-color="#FB8A2E" />
                    <stop offset="0.71474" stop-color="#E2425C" />
                    <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                  >
                    <stop offset="0.156701" stop-color="#406ADC" />
                    <stop offset="0.467799" stop-color="#6A45BE" />
                    <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <p>@desprdo</p>
            </a>
            {/* facebook*/}
            <a
              href="https://www.facebook.com/maamunsaif/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:text-glowinglime transition-all duration-300"
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 64 64"
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>
                    {`.cls-1 { fill: #9dcbf4; }
        .cls-2 { fill: #389ad6; }
        .cls-3 { 
          fill: none; 
          stroke: #2a5081; 
          stroke-linecap: round; 
          stroke-linejoin: round; 
          stroke-width: 2px; 
        }
        .cls-4 { fill: #2a5081; }`}
                  </style>
                </defs>

                <title />

                <g data-name="Layer 6" id="Layer_6">
                  <path
                    className="cls-1"
                    d="M30.54,40.59V50.88c-2.67.13-5.38.19-7.63.1-7.26-.28-10.47,3.51-10.39-10.51s.67-25.53.67-25.53,1.55-2.16,10.94-2.22a51.72,51.72,0,0,0,2.41,19.85h-.4v5.94h3.08C29.62,39.21,30.06,39.91,30.54,40.59Z"
                  />

                  <path
                    className="cls-2"
                    d="M34,21.39s-7.09,1.38-8.57,7.47-5.73,2.84-6,9.09-7.25,3-6.72,9.33,15.78,3.36,15.78,3.36l2.25-.25-.19-11.31V38.2L27,38H25.66l.72-4s-.72-1.63,1.47-1.38,2.65-1.37,2.7-5.24A7.59,7.59,0,0,1,34,21.39Z"
                  />

                  <path
                    className="cls-3"
                    d="M30.54,51H17.22a4.64,4.64,0,0,1-4.63-4.62V17.28a4.64,4.64,0,0,1,4.63-4.63H45.8"
                  />

                  <path
                    className="cls-3"
                    d="M50.43,17.28V46.36A4.64,4.64,0,0,1,45.8,51h-9"
                  />

                  <circle className="cls-4" cx="50.48" cy="13.95" r="1" />

                  <path
                    className="cls-3"
                    d="M30.54,51V38.51h-4.4V32.57h4.4V26.84a6,6,0,0,1,6-6h6.23v5.65H38.21A1.47,1.47,0,0,0,36.74,28v4.54h6v6h-6V51"
                  />
                </g>
              </svg>
              <p>@maamunsaif</p>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Saifur Rahman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
