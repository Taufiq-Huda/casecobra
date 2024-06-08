import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { userAgent } from "next/server";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Navbar() {
  const {getUser} = getKindeServerSession()
  const user = await getUser();
  const isAdmin = user?.email=== process.env.ADMIN_EMAIL;
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex font-semibold z-40">
            case<span className="bg-green-600">cobra</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign Out
                </Link>
                {isAdmin ? (
                  <Link
                    href="api/auth/logout"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dhashboard
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center sm:flex gap-1",
                  })}
                >
                  Creat case
                  <ArrowRight className="ml-1.5 h-5 w-5"/>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
              
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost"
                  })}
                >
                  Log in
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block"/>
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center sm:flex gap-1",
                  })}
                >
                  Creat case
                  <ArrowRight className="ml-1.5 h-5 w-5"/>
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
