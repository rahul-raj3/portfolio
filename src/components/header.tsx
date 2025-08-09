'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";
import Image from "next/image";
import { LiaBookSolid } from "react-icons/lia";

export const AcmeLogo = () => {
  return (
    <>
    {/* <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg> */}
    <Image 
      src="/hero/transparent_logo.png"
      alt="logo"
      className=""
      width={64}
      height={64}
    />
    </>
  );
};

export const ChevronDown = ({fill, size, height, width, ...props}: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({fill, size, height, width, ...props}: any) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({fill, size, height, width, ...props}: any) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({fill = "currentColor", size, height, width, ...props}: any) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({fill = "currentColor", size, height, width, ...props}: any) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({fill = "currentColor", size, height, width, ...props}: any) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({fill = "currentColor", size, height, width, ...props}: any) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18 10V6h-4M6 14v4h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function Header() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
<>
  {/* Wrapper to prevent background overflow on mobile */}
  <div className="relative overflow-hidden">

    {/* Left background shape */}
    <div
      aria-hidden="true"
      className="
        absolute
        top-1/2
        left-[max(-10rem,calc(50%-52rem))]
        sm:left-[max(-7rem,calc(50%-52rem))]
        -z-10
        -translate-y-1/2
        transform-gpu
        blur-xl sm:blur-2xl
        pointer-events-none
      "
    >
      <div
        style={{
          clipPath:
            "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
        }}
        className="
          aspect-[577/310]
          w-[30rem] sm:w-[36rem] md:w-[45rem]
          bg-gradient-to-r from-[#ffec80] to-[#9089fc]
          opacity-20 sm:opacity-30
        "
      />
    </div>

    {/* Right background shape */}
    <div
      aria-hidden="true"
      className="
        absolute
        top-1/2
        left-[max(10rem,calc(50%+8rem))]
        sm:left-[max(45rem,calc(50%+8rem))]
        -z-10
        -translate-y-1/2
        transform-gpu
        blur-xl sm:blur-2xl
        pointer-events-none
      "
    >
      <div
        style={{
          clipPath:
            "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
        }}
        className="
          aspect-[577/310]
          w-[30rem] sm:w-[36rem] md:w-[45rem]
          bg-gradient-to-r from-[#ff80b5] to-[#9089fc]
          opacity-20 sm:opacity-30
        "
      />
    </div>

    {/* Navbar */}
    <Navbar isBordered height="4rem" maxWidth="full" className="w-full" position="static"
    shouldHideOnScroll={false}
    >
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-lg">Apana Learning</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="start">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold tracking-wider"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                <LiaBookSolid size={18} />
                Learn
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu aria-label="ACME features" itemClasses={{ base: "gap-4" }}>
            <DropdownItem
              key="autoscaling"
              // description="ACME scales apps based on demand and load"
              startContent={icons.scale}
            >
              DSA
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              // description="Real-time metrics to debug issues"
              startContent={icons.activity}
            >
              JavaScript
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              // description="ACME runs on ACME, join us at web scale"
              startContent={icons.flash}
            >
              Node.js
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // description="High availability and uptime guarantees"
              startContent={icons.server}
            >
              Next.js
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Support team ready to respond"
              startContent={icons.user}
            >
              Databases
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem isActive>
          <Link href="#" className="font-semibold tracking-wider">
            Practice
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="font-semibold tracking-wider">
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <Image
            src="/logo/github_logo.png"
            alt="github"
            height={28}
            width={28}
            draggable={false}
          /> */}
      <Button isIconOnly aria-label="Like" className="bg-transparent">
        <HeartIcon />
      </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          {/* <Image
            src="/icons/linkedin.png"
            alt="linkedin"
            height={28}
            width={28}
            draggable={false}
          /> */}
       <Button isIconOnly aria-label="Like" className="bg-transparent">
          <Image
            src="/icons/linkedin.png"
            alt="linkedin"
            height={28}
            width={28}
            draggable={false}
          />
      </Button>
        </NavbarItem>
        <NavbarItem>{/* Login button can go here if needed */}
        <Button className="bg-yellow-600 text-white tracking-wider font-semibold hidden lg:flex">
          Login
        </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  </div>
</>


  );
}

export const UserIcon = ({fill = "currentColor", size, height, width, ...props}: any) => {
  return (
    <svg
      data-name="Iconly/Curved/Profile"
      height={size || height || 20}
      viewBox="0 0 24 24"
      width={size || width || 20}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path
          d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
          data-name="Stroke 1"
        />
        <path d="M11.837 11.174a4.372 4.372 0 10-.031 0z" data-name="Stroke 3" />
      </g>
    </svg>
  );
};

export const HeartIcon = ({fill = "currentColor", filled, size, height, width, ...props}: any) => {
  return (
    // <svg
    //   fill={filled ? fill : "none"}
    //   height={size || height || 24}
    //   viewBox="0 0 24 24"
    //   width={size || width || 24}
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <path
    //     d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
    //     stroke={fill}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={1.5}
    //   />
    // </svg>
        <Image
            src="/logo/github_logo.png"
            alt="github"
            height={28}
            width={28}
            draggable={false}
          /> 
  );
};
