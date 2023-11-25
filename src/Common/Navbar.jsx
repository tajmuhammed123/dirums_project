import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Drawer,
  Input,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
 
export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <>
    <Drawer open={open} onClose={closeDrawer} className="bg-black">
        <div className="mb-2 flex items-center justify-between p-4 bg-black">
          <Typography variant="h5" color="blue-gray" className="text-white">
            Side Bar
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Sidebar closeSidebar={closeDrawer} />
      </Drawer>
    
    <Navbar className="h-max max-w-full rounded-none px-4 py-2 bg-black border-0">
    
      <div className="flex items-center justify-between ">
      <div className="flex align-middle justify-between">
            <svg
              onClick={openDrawer}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-9 w-9 lg:h-12  lg:pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        <div className="hidden lg:block">
          <img className="w-28" src="https://dirums.com/images/logo%20and%20bird.webp" alt="" />
        </div>
        <div className="gap-2 flex flex-row">
          <HeartIcon className="w-7 text-brown-300"/>
          <ShoppingBagIcon className="w-7 text-brown-300"/>
        </div>
      </div>
    <div className="w-full flex justify-center py-3">
    <div className="relative w-full gap-2 md:w-auto mx-3">
              <Input
                type="search"
                color="black"
                placeholder="Search for art works artists and many more"
                containerProps={{
                  className: "min-w-[350px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-black focus:!border-blue-gray-300 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="black"
                >
                  <path
                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                    fill="#CFD8DC"
                  />
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              </div>
        </div>
    </Navbar>

    </>
  );
}