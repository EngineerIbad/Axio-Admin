import Image from "next/image";
import logo from "@/assets/axios.svg";
import Divider from "./Divider";

export default function AuthHeader() {
    return (
        <div className="absolute top-0 w-full flex flex-col justify-center">
            <div className="my-3 w-full flex justify-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <div>
                        <Image
                            src={logo}
                            alt="Axio Logo"
                            width={40}
                            height={40}
                        />
                    </div>

                    <span className="ml-3 font-bold tracking-widest text-[18px] uppercase">
                        Axio
                    </span>
                    <span className="ml-[2px] text-[18px] text-[#3C83F6] tracking-tighter">
                        Admin
                    </span>
                </div>

            </div>

            <Divider />
        </div>
    );
}