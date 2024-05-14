import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeedbackReport() {
  return (
    <div>
      <Button
        asChild
        className="flex border-2 ml-4 border-blue-500 rounded-md px-4 py-2 bg-white text-blue-700
               hover:bg-blue-700 shadow-md hover:text-white transition duration-300 ease-in-out"
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScKJid3gRaU2tUXbRS2809EuR1YAS_oFEP7Xs1Nsi7W5WdGng/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className='ml-1'>Feedback Report</span>
        </Link>
      </Button>
    </div>
  );
}
