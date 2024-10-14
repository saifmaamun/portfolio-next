import { useState } from "react";
import { motion } from "framer-motion";
const sections = ["Frontend", "Backend", "Database", "Tools"];

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  experience: number;
  projects: number;
  proficiency: string;
  position: { top: string; left: string };
};

const skillsData: Skill[] = [
  {
    name: "JavaScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-14 h-14"
        aria-label="JavaScript"
        role="img"
      >
        <rect width="512" height="512" rx="15%" fill="#f7df1e" />
        <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
      </svg>
    ),
    description:
      "Experienced in writing modern ES6+ JavaScript, working on various front-end and backend projects...",
    experience: 5,
    projects: 30,
    proficiency: "Advanced",
    position: { top: "10%", left: "15%" },
  },
  {
    name: "React",
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        className="w-14 h-14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
          fill="#53C1DE"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
          fill="#53C1DE"
        />
      </svg>
    ),
    description:
      "Building dynamic front-end applications with React for over 4 years...",
    experience: 4,
    projects: 20,
    proficiency: "Advanced",
    position: { top: "25%", left: "30%" },
  },
  {
    name: "Node.js",
    icon: (
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        className="w-14 h-14 "
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 21.300781 6 C 21.143781 6 21 6.1257812 21 6.3007812 L 21 11.796875 L 19.753906 11.070312 C 19.675906 11.024313 19.588 11.001953 19.5 11.001953 C 19.412 11.001953 19.324094 11.024312 19.246094 11.070312 L 16.251953 12.816406 C 16.095953 12.906406 16 13.072953 16 13.251953 L 16 16.748047 C 16 16.928047 16.095953 17.093594 16.251953 17.183594 L 19.246094 18.929688 C 19.324094 18.975687 19.412 18.998047 19.5 18.998047 C 19.588 18.998047 19.675906 18.975688 19.753906 18.929688 L 22.748047 17.183594 C 22.904047 17.093594 23 16.927047 23 16.748047 L 23 15 L 23 13.251953 L 23 7.2304688 C 23 7.0524688 22.904953 6.8888281 22.751953 6.7988281 L 21.449219 6.0410156 C 21.400219 6.0130156 21.350781 6 21.300781 6 z M 11.5 11.001953 C 11.41225 11.001953 11.324594 11.024813 11.246094 11.070312 L 8.2519531 12.816406 C 8.0959531 12.906406 8 13.072953 8 13.251953 L 8 16.748047 C 8 16.928047 8.0959531 17.093594 8.2519531 17.183594 L 11.246094 18.929688 C 11.403094 19.020688 11.596906 19.020688 11.753906 18.929688 L 14.748047 17.183594 C 14.904047 17.093594 15 16.927047 15 16.748047 L 15 13.251953 C 15 13.071953 14.904047 12.906406 14.748047 12.816406 L 11.753906 11.070312 C 11.675406 11.024812 11.58775 11.001953 11.5 11.001953 z M 27.5 11.001953 C 27.412 11.001953 27.324094 11.024312 27.246094 11.070312 L 24.251953 12.816406 C 24.095953 12.906406 24 13.072953 24 13.251953 L 24 16.748047 C 24 16.928047 24.095953 17.093594 24.251953 17.183594 L 27.15625 18.939453 C 27.31225 19.034453 27.508016 19.035359 27.666016 18.943359 L 29.09375 18.113281 C 29.24175 18.028281 29.24275 17.813562 29.09375 17.726562 L 26 15.904297 L 26 14.109375 L 27.5 13.236328 L 29 14.109375 L 29 15.359375 C 29 15.526375 29.140375 15.552094 29.234375 15.496094 C 29.612375 15.274094 30.751953 14.613281 30.751953 14.613281 C 30.904953 14.524281 31 14.359641 31 14.181641 L 31 13.251953 C 31 13.071953 30.904047 12.906406 30.748047 12.816406 L 27.753906 11.070312 C 27.674906 11.024313 27.588 11.001953 27.5 11.001953 z M 3.5 11.003906 C 3.412 11.003906 3.3240937 11.026266 3.2460938 11.072266 L 0.25195312 12.816406 C 0.095953125 12.907406 0 13.073906 0 13.253906 L 0 17.716797 C 0 17.934797 0.23582812 18.069938 0.42382812 17.960938 L 1.7519531 17.1875 C 1.9049531 17.0975 2 16.933859 2 16.755859 L 2 14.113281 L 3.5 13.238281 L 5 14.113281 L 5 16.755859 C 5 16.933859 5.0950469 17.0975 5.2480469 17.1875 L 6.5761719 17.960938 C 6.7641719 18.070938 7 17.934797 7 17.716797 L 7 13.253906 C 7 13.073906 6.9040469 12.907406 6.7480469 12.816406 L 3.7539062 11.072266 C 3.6759063 11.026266 3.588 11.003906 3.5 11.003906 z M 19.5 13.236328 L 21 14.111328 L 21 15 L 21 15.888672 L 19.5 16.763672 L 18 15.888672 L 18 14.111328 L 19.5 13.236328 z M 27.5 14.003906 L 26.642578 14.503906 L 26.642578 15.501953 L 27.5 16 L 28.357422 15.501953 L 28.357422 14.503906 L 27.5 14.003906 z M 15.40625 17.998047 C 15.303375 17.998047 15.199375 18.023219 15.109375 18.074219 L 12.296875 19.699219 C 12.111875 19.801219 12 20.001938 12 20.210938 L 12 23.457031 C 12 23.666031 12.116875 23.86275 12.296875 23.96875 L 13.037109 24.390625 C 13.392109 24.565625 13.522594 24.566406 13.683594 24.566406 C 14.213594 24.566406 14.515625 24.249453 14.515625 23.689453 L 14.515625 20.482422 C 14.515625 20.433422 14.477594 20.398438 14.433594 20.398438 L 14.078125 20.398438 C 14.029125 20.398438 13.994141 20.438422 13.994141 20.482422 L 13.994141 23.689453 C 13.994141 23.932453 13.737359 24.181656 13.318359 23.972656 L 12.548828 23.529297 C 12.523828 23.514297 12.505859 23.484078 12.505859 23.455078 L 12.505859 20.208984 C 12.505859 20.179984 12.519828 20.145859 12.548828 20.130859 L 15.361328 18.509766 C 15.391328 18.494766 15.425219 18.494766 15.449219 18.509766 L 18.263672 20.130859 C 18.292672 20.145859 18.306641 20.174984 18.306641 20.208984 L 18.306641 23.455078 C 18.306641 23.489078 18.287672 23.518203 18.263672 23.533203 L 15.449219 25.160156 C 15.424219 25.175156 15.385328 25.175156 15.361328 25.160156 L 14.642578 24.732422 C 14.623578 24.722422 14.593219 24.716562 14.574219 24.726562 C 14.375219 24.843563 14.335391 24.858875 14.150391 24.921875 C 14.101391 24.936875 14.034781 24.966922 14.175781 25.044922 L 15.109375 25.599609 C 15.202375 25.648609 15.30425 25.677734 15.40625 25.677734 C 15.51325 25.677734 15.617219 25.648703 15.699219 25.595703 L 18.511719 23.96875 C 18.696719 23.86675 18.808594 23.666031 18.808594 23.457031 L 18.808594 20.210938 C 18.808594 20.001938 18.691719 19.806219 18.511719 19.699219 L 15.699219 18.074219 C 15.611719 18.023219 15.509125 17.998047 15.40625 17.998047 z M 19.792969 19.496094 C 19.505969 19.496094 19.253906 19.728156 19.253906 20.035156 C 19.253906 20.332156 19.495969 20.576172 19.792969 20.576172 C 20.089969 20.576172 20.332031 20.332156 20.332031 20.035156 C 20.332031 19.728156 20.084969 19.491094 19.792969 19.496094 z M 19.787109 19.582031 C 20.041109 19.582031 20.246094 19.782156 20.246094 20.035156 C 20.246094 20.283156 20.040109 20.488141 19.787109 20.494141 C 19.538109 20.494141 19.335938 20.288156 19.335938 20.035156 C 19.335938 19.782156 19.539109 19.582031 19.787109 19.582031 z M 19.589844 19.728516 L 19.589844 20.335938 L 19.705078 20.335938 L 19.705078 20.09375 L 19.8125 20.09375 C 19.8565 20.09375 19.866953 20.112484 19.876953 20.146484 C 19.876953 20.151484 19.895391 20.308891 19.900391 20.337891 L 20.025391 20.337891 C 20.011391 20.308891 20.001094 20.225781 19.996094 20.175781 C 19.982094 20.097781 19.977531 20.044062 19.894531 20.039062 C 19.938531 20.024063 20.011719 20.000672 20.011719 19.888672 C 20.011719 19.727672 19.871828 19.728516 19.798828 19.728516 L 19.589844 19.728516 z M 19.705078 19.826172 L 19.802734 19.826172 C 19.832734 19.826172 19.890625 19.825203 19.890625 19.908203 C 19.890625 19.942203 19.875875 19.997094 19.796875 19.996094 L 19.705078 19.996094 L 19.705078 19.826172 z M 16.160156 20.322266 C 15.357156 20.322266 14.880859 20.664516 14.880859 21.228516 C 14.880859 21.846516 15.357953 22.011844 16.126953 22.089844 C 17.046953 22.181844 17.119141 22.314141 17.119141 22.494141 C 17.119141 22.810141 16.865484 22.941406 16.271484 22.941406 C 15.526484 22.941406 15.362594 22.756719 15.308594 22.386719 C 15.303594 22.347719 15.268609 22.318359 15.224609 22.318359 L 14.859375 22.318359 C 14.815375 22.318359 14.777344 22.353344 14.777344 22.402344 C 14.777344 22.874344 15.034625 23.439453 16.265625 23.439453 C 17.168625 23.438453 17.679688 23.088609 17.679688 22.474609 C 17.679688 21.866609 17.270297 21.704891 16.404297 21.587891 C 15.528297 21.470891 15.441406 21.412031 15.441406 21.207031 C 15.441406 21.037031 15.513156 20.814453 16.160156 20.814453 C 16.739156 20.814453 16.954969 20.941078 17.042969 21.330078 C 17.052969 21.369078 17.080141 21.392578 17.119141 21.392578 L 17.484375 21.392578 C 17.508375 21.392578 17.528969 21.383141 17.542969 21.369141 C 17.557969 21.350141 17.5675 21.330641 17.5625 21.306641 C 17.5045 20.634641 17.061156 20.322266 16.160156 20.322266 z"
          fill="#39ff14"
        />
      </svg>
    ),
    description:
      "Expertise in developing backend services and APIs using Node.js...",
    experience: 4,
    projects: 25,
    proficiency: "Advanced",
    position: { top: "40%", left: "10%" },
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TypeScript"
        role="img"
        className="w-14 h-14"
        viewBox="0 0 512 512"
      >
        <rect width="512" height="512" rx="15%" fill="#3178c6" />
        <path
          fill="#ffffff"
          d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
        />
      </svg>
    ),
    description:
      "Solid knowledge of TypeScript to write safer and more maintainable code...",
    experience: 3,
    projects: 15,
    proficiency: "Intermediate",
    position: { top: "48%", left: "45%" },
  },
  {
    name: "HTML",
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        className="w-14 h-14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
        <path
          d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
          fill="white"
        />
      </svg>
    ),
    description:
      "Expertise in developing backend services and APIs using Node.js...",
    experience: 4,
    projects: 25,
    proficiency: "Advanced",
    position: { top: "60%", left: "20%" },
  },
  {
    name: "MongoDB",
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 1024 1024"
        className="w-14 h-14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="512" cy="512" r="512" style={{ fill: "#13aa52" }} />
        <path
          d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
          style={{ fill: "#fff" }}
        />
      </svg>
    ),
    description:
      "Expertise in developing backend services and APIs using Node.js...",
    experience: 4,
    projects: 25,
    proficiency: "Advanced",
    position: { top: "70%", left: "40%" },
  },
  {
    name: "NEXT",
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 15 15"
        fill="none"
        className="w-14 h-14 "
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z"
          fill="#39ff14"
        />
      </svg>
    ),
    description:
      "Expertise in developing backend services and APIs using Node.js...",
    experience: 4,
    projects: 25,
    proficiency: "Advanced",
    position: { top: "75%", left: "65%" },
  },
  {
    name: "Redux",
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 -6 256 256"
        version="1.1"
        className="w-14 h-14 "
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z"
            fill="#764ABC"
          ></path>
        </g>
      </svg>
    ),
    description:
      "Expertise in developing backend services and APIs using Node.js...",
    experience: 4,
    projects: 25,
    proficiency: "Advanced",
    position: { top: "20%", left: "60%" },
  },
  {
    name: "Tailwind",
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        className="w-14 h-14 "
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>file_type_tailwind</title>
        <path
          d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
          style={{ fill: "#44a8b3" }}
        />
      </svg>
    ),
    description:
      "Expertise in developing backend services and APIs using Node.js...",
    experience: 4,
    projects: 25,
    proficiency: "Advanced",
    position: { top: "45%", left: "80%" },
  },
  {
    name: "CSS",
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        className="w-14 h-14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
        <path
          d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
          fill="white"
        />
      </svg>
    ),
    description:
      "Expertise in developing backend services and APIs using Node.js...",
    experience: 4,
    projects: 25,
    proficiency: "Advanced",
    position: { top: "40%", left: "65%" },
  },
  // Add more skills here...
];

const skillsDetails = {
  Frontend: {
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using modern technologies.",
    technologies: [
      {
        name: "React",
        details: "Highly proficient in building single-page applications.",
      },
      {
        name: "Redux",
        details: "Highly proficient in building single-page applications.",
      },
      {
        name: "Next.js",
        details:
          "Experience in server-side rendering and static site generation.",
      },
      {
        name: "TypeScript",
        details: "Strong typing for better code quality and maintainability.",
      },
    ],
  },
  Backend: {
    title: "Backend Development",
    description: "Developing robust server-side applications and APIs.",
    technologies: [
      {
        name: "Node.js",
        details: "Building scalable server-side applications.",
      },
      { name: "Express.js", details: "Creating RESTful APIs with ease." },
      {
        name: "MongoDB",
        details: "Working with NoSQL databases for efficient data storage.",
      },
      {
        name: "Mongoose",
        details: "Working with NoSQL databases for efficient data storage.",
      },
      {
        name: "JWT , OAuth , Firebase",
        details: "Implementing secure authentication methods.",
      },
    ],
  },
  Database: {
    title: "Databases",
    description: "Designing and managing databases for optimal performance.",
    technologies: [
      {
        name: "MongoDB",
        details: "Skilled in schema design and query optimization.",
      },
      {
        name: "Mongoose",
        details: "Using Mongoose for data modeling and validation.",
      },

      {
        name: "Database Indexing",
        details: "Improving query performance with proper indexing strategies.",
      },
    ],
  },
  Tools: {
    title: "Tools & Platforms",
    description:
      "Utilizing various tools to enhance productivity and streamline development.",
    technologies: [
      {
        name: "Git",
        details: "Version control and collaboration with Git and GitHub.",
      },

      {
        name: "CI/CD",
        details: "Implementing continuous integration and delivery pipelines.",
      },
      { name: "Figma", details: "Designing UI/UX mockups and prototypes." },
    ],
  },
};
type Section = keyof typeof skillsDetails;

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("Frontend");

  return (
    <section id="skills" className="py-36">
      <h2 className="text-left text-4xl text-glowinglimetext-shadow-glow font-bold">
        Skills
      </h2>

      {/* <div className="skills-section flex flex-col md:flex-row items-center justify-center md:justify-between lg:min-h-screen md:min-h-screen pb-16">  */}
      <div className="skills-section flex flex-col md:flex-row items-center justify-center md:justify-between lg:min-h-screen md:min-h-screen">
        {/* Left Side - Floating Skill Icons */}
        <div className="relative w-full md:w-1/2 h-96 flex justify-center items-center">
          <div className="floating-icons relative w-[400px] h-[400px]">
            {skillsData.map((skill) => (
              <motion.div
                key={skill.name}
                className="absolute skill-icon"
                style={{
                  top: skill.position.top,
                  left: skill.position.left,
                }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onHoverStart={() => setSelectedSkill(skill)}
                onHoverEnd={() => setSelectedSkill(null)}
              >
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Skill Information */}
        <div className="skill-info w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
          {/* If hovering over a skill, show its info; else show default */}
          {selectedSkill ? (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-3xl font-bold">{selectedSkill.name}</h3>
              <p className="text-lg mt-4">{selectedSkill.description}</p>
              <p className="mt-2">
                Experience: {selectedSkill.experience} years
              </p>
              <p className="mt-2">Projects: {selectedSkill.projects}</p>
              <p className="mt-2">Proficiency: {selectedSkill.proficiency}</p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-4xl font-bold text-glowinglime mb-6">
                  Overall Skills Summary
                </h3>
                <p className="text-lg text-gray-300 mb-8">
                  I am a full-stack developer with expertise in several
                  technologies across frontend, backend, databases, and tools.
                  Below is a summary of my skills.
                </p>
              </motion.div>

              {/* Buttons for different sections */}
              <div className="relative mb-6 flex justify-center md:justify-start gap-8">
                {sections.map((section) => (
                  <motion.button
                    key={section}
                    className={`text-lg font-semibold ${
                      activeSection === section
                        ? "text-glowinglime"
                        : "text-gray-400"
                    } relative`}
                    onClick={() => setActiveSection(section as Section)}
                    whileHover={{ color: "#39FF14" }}
                  >
                    {section}
                    {/* Active Underline Indicator */}
                    {activeSection === section && (
                      <motion.div
                        className="underline"
                        layoutId="underline"
                        initial={false}
                        animate={{
                          width: "100%",
                          height: 2,
                          backgroundColor: "#39FF14",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Detailed Info of the Selected Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-glowinglime">
                  {skillsDetails[activeSection].title}
                </h3>
                <p className="text-gray-300 mt-4">
                  {skillsDetails[activeSection].description}
                </p>
                <div className="mt-6">
                  {skillsDetails[activeSection].technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex justify-between bg-gray-800 p-4 rounded-md mb-2"
                    >
                      <span className="font-semibold text-glowinglime">
                        {tech.name}
                      </span>
                      <span className="text-gray-300">{tech.details}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default Skills;

/*
<div className="flex flex-col md:flex-row items-center justify-center">
      
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto flex justify-center">
        <div className="relative w-full h-full grid place-items-center">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-icon bg-black text-glowinglime p-4 rounded-full shadow-xl cursor-pointer hover:scale-125 hover:bg-[#ff00ff]"
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
              initial={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        {selectedSkill ? (
          <>
            <h3 className="text-3xl font-bold text-glowinglime">
              {selectedSkill}
            </h3>
            <p className="mt-2 text-lg text-gray-300">
              {
                skillsData.find((skill) => skill.name === selectedSkill)
                  ?.description
              }
            </p>
            <p className="mt-2 text-md text-gray-400">
              Experience:{" "}
              {
                skillsData.find((skill) => skill.name === selectedSkill)
                  ?.experience
              }{" "}
              years
            </p>
            <p className="mt-2 text-md text-gray-400">
              Projects:{" "}
              {
                skillsData.find((skill) => skill.name === selectedSkill)
                  ?.projects
              }
            </p>
          </>
        ) : (
          <>
            <h3 className="text-3xl font-bold text-glowinglime">
              My Overall Skills
            </h3>
            <p className="mt-2 text-lg text-gray-300">
              I have experience working with a variety of technologies including
              JavaScript, React, Node.js, and more.
            </p>
            <p className="mt-2 text-md text-gray-400">Total Projects: 25+</p>
            <p className="mt-2 text-md text-gray-400">Experience: 5+ years</p>
          </>
        )}
      </div>
    </div>
*/
