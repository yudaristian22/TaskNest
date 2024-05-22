import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import localFont from "next/font/local";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Logo } from "./Logo";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="relative top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div
          className={cn(
            "space-x-4 md:block md:w-auto flex items-center justify-between w-full",
            textFont.className
          )}
        >
          {session && (
            <>
              Hello, {session?.user?.name}
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
