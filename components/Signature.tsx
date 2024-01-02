import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Signature = () => {
  return (
    <div className="fixed flex bottom-0 right-0 p-5">
      <p className=" text-gray-500 italic text-xs mt-3">
        Created by Saar Gold - Decemeber 2023
      </p>
          <Link
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </Link>
    </div>
  );
}

export default Signature