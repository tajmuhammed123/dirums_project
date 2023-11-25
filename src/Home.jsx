import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import "./Home.css";
import {
  ArrowRightIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Home() {
  return (
    <>
      <div className="flex md:justify-center md:bg-black">
        <img
          src="https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna-and-Gopalas1700648841242.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-row md:p-10 overflow-x-auto w-full md:justify-center">
        <div className="justify-around flex-row flex md:w-full">
          <div className="flex flex-col items-center p-3 w-auto">
            <img
              className="h-36 w-36 rounded-full object-cover object-center max-w-none"
              src="https://img.freepik.com/free-photo/playful-cute-puppy-sitting-green-grass-generative-ai_188544-8416.jpg?w=1380&t=st=1700889323~exp=1700889923~hmac=a377e0d3cb2c0ee52bd29f713ee39c27d54769b9162250447b9e0f986fba2ca9"
              alt="nature image"
            />
            <Typography className="mt-3 uppercase font-bold text-xl">
              Jewellery
            </Typography>
          </div>
          <div className="flex flex-col items-center p-3 ">
            <img
              className="h-36 w-36 rounded-full object-cover object-center max-w-none"
              src="https://img.freepik.com/free-photo/cute-rodent-eating-tree-branch-outdoors-generative-ai_188544-12589.jpg?w=1380&t=st=1700889120~exp=1700889720~hmac=ededd373f40d94a46f291f75b84152132fdeccb19315d990ac775503e7d3b96c"
              alt="nature image"
            />
            <Typography className="mt-3 uppercase font-bold text-xl">
              Table Decor
            </Typography>
          </div>
          <div className="flex flex-col items-center p-3">
            <img
              className="h-36 w-36 rounded-full object-cover object-center max-w-none"
              src="https://img.freepik.com/free-photo/close-up-industrious-bee-flying-search-its-pollen-generative-ai_188544-7610.jpg?w=1380&t=st=1700889669~exp=1700890269~hmac=b282e889cf83f42d437f7a22e9c26d7fa3b457185769419eb9b08111dfe204ee"
              alt="nature image"
            />
            <Typography className="mt-3 uppercase font-bold text-xl">
              Madhubani
            </Typography>
          </div>
          <div className="flex flex-col items-center p-3">
            <img
              className="h-36 w-36 rounded-full object-cover object-center max-w-none"
              src="https://img.freepik.com/free-photo/tiger-looking-with-open-mouth_1150-18083.jpg?w=740&t=st=1700889718~exp=1700890318~hmac=73f2697605f7542566ae10ce687a296a24dd83b60b226db95f79fe8bf0ca26ea"
              alt="nature image"
            />
            <Typography className="mt-3 uppercase font-bold text-xl">
              Lippan Art
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-around mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full border-2 border-black p-2 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              transform="scale(1, -1)"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="md:w-10 md:h-10 w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </div>
          <Typography variant="h3" className="text-xs md:text-lg">
            Easy Returns
          </Typography>
          <Typography className="text-xs md:text-lg">Within 7 days</Typography>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="rounded-full border-2 border-black p-2 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-10 md:h-10 w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <Typography variant="h3" className="text-xs md:text-lg">
            Secured
          </Typography>
          <Typography className="text-xs md:text-lg">
            Checkouts and Payments
          </Typography>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="rounded-full border-2 border-black p-2 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-10 md:h-10 w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
          <Typography variant="h3" className="text-xs md:text-lg">
            Free Shipping
          </Typography>
          <Typography className="text-xs md:text-lg">Worldwide</Typography>
        </div>
      </div>
      <div className="w-full flex items-center mt-5 flex-col">
        <div className="border-b-brown-500 border-b-2 p-2">
          <Typography variant="h4">Best Sellers</Typography>
        </div>
        <Typography className="text-center mx-5 mt-6">
          Buy best seller art online for your living room, dining room, kitchen,
          bedroom, office, loby and more
        </Typography>
        <div className="border-b-brown-500 border-b-2 p-2 w-11/12 md:w-2/3"></div>
      </div>
      <div>
        <div className="flex flex-row px-5 pt-5 overflow-x-auto">
          <Card className="w-72 m-5 flex-shrink-0">
            <CardHeader
              floated={false}
              className="relative h-60 flex items-center justify-center"
            >
              <img
                src="https://img.freepik.com/free-photo/selective-focus-shot-beautiful-butterfly-sitting-branch-with-small-flowers_181624-11151.jpg?w=1060&t=st=1700887750~exp=1700888350~hmac=99925b34ddf87c2fb8922754c85aed7204eaa18f8ea93c26c8753b2ddcfadd3a"
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-full">
                <HeartIcon className="w-6 h-6" />
              </button>
              <button className="absolute bottom-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-md flex flex-row font-semibold">
                <ShoppingCartIcon className="w-6 h-6" />
                ADD TO CART
              </button>
            </CardHeader>
            <CardBody className="text-left">
              <Typography variant="h4" color="brown" className="mb-2 uppercase">
                Butterfly
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Amit Chaudary
              </Typography>
              <Typography variant="h4" color="black">
                $10,000/-
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-72 m-5 flex-shrink-0">
            <CardHeader
              floated={false}
              className="relative h-60 flex items-center justify-center"
            >
              <img
                src="https://img.freepik.com/free-photo/redeyed-tree-frog-agalychnis-callidryas-closeup-branch-redeyed-tree-frog-sitting-green-leaves_488145-619.jpg?w=1060&t=st=1700888937~exp=1700889537~hmac=983de2d8fe260984267f04984ed7aac047fac1956ab1ea931425238e8a32142d"
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-full">
                <HeartIcon className="w-6 h-6" />
              </button>
              <button className="absolute bottom-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-md flex flex-row font-semibold">
                <ShoppingCartIcon className="w-6 h-6" />
                ADD TO CART
              </button>
            </CardHeader>
            <CardBody className="text-left">
              <Typography variant="h4" color="brown" className="mb-2 uppercase">
                Frog
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Amit Chaudary
              </Typography>
              <Typography variant="h4" color="black">
                $12,000/-
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="w-full justify-end flex mb-5 pr-5">
          <div className="flex flex-row align-middle items-center">
            <a href="">
              <Typography className="uppercase font-semibold text-lg">
                View all
              </Typography>
            </a>
            <ArrowRightIcon className="w-8 h-8 text-white bg-brown-500 rounded-full p-1 m-3" />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex items-center mt-5 flex-col">
          <div className="border-b-brown-500 border-b-2 p-2">
            <Typography variant="h4" className="uppercase">
              New Arrivals
            </Typography>
          </div>
        </div>
        <div className="flex flex-row px-5 pt-5 overflow-x-auto">
          <Card className="w-72 m-5 flex-shrink-0">
            <CardHeader
              floated={false}
              className="relative h-60 flex items-center justify-center"
            >
              <img
                src="https://img.freepik.com/free-photo/red-deer-nature-habitat-during-deer-rut-european-wildlife_475641-943.jpg?w=360&t=st=1700880378~exp=1700880978~hmac=6ecb12ec0b637d600431bf5e1ad99e7e4cd821ddb956ab1700613029bda9803a"
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-full">
                <HeartIcon className="w-6 h-6 hover:text-red-900" />
              </button>
              <button className="absolute bottom-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-md flex flex-row font-semibold">
                <ShoppingCartIcon className="w-6 h-6" />
                ADD TO CART
              </button>
            </CardHeader>

            <CardBody className="text-left">
              <Typography variant="h4" color="brown" className="mb-2 uppercase">
                Deer
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Amit Chaudary
              </Typography>
              <Typography variant="h4" color="black">
                $10,000/-
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-72 m-5 flex-shrink-0">
            <CardHeader
              floated={false}
              className="relative h-60 flex items-center justify-center"
            >
              <img
                src="https://img.freepik.com/free-photo/vertical-shot-white-swan-swimming-lake-hallstatt_181624-35059.jpg?w=360&t=st=1700889868~exp=1700890468~hmac=b703eef052f3a6cd869896dab61efbe05b71a6320fdc77b86ceceb688e9044ba"
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-full">
                <HeartIcon className="w-6 h-6 hover:text-red-900" />
              </button>
              <button className="absolute bottom-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-md flex flex-row font-semibold">
                <ShoppingCartIcon className="w-6 h-6" />
                ADD TO CART
              </button>
            </CardHeader>

            <CardBody className="text-left">
              <Typography variant="h4" color="brown" className="mb-2 uppercase">
                Duck
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Amit Chaudary
              </Typography>
              <Typography variant="h4" color="black">
                $12,000/-
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-72 m-5 flex-shrink-0">
            <CardHeader
              floated={false}
              className="relative h-60 flex items-center justify-center"
            >
              <img
                src="https://img.freepik.com/free-photo/red-deer-nature-habitat-during-deer-rut-european-wildlife_475641-943.jpg?w=360&t=st=1700880378~exp=1700880978~hmac=6ecb12ec0b637d600431bf5e1ad99e7e4cd821ddb956ab1700613029bda9803a"
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-full">
                <HeartIcon className="w-6 h-6 hover:text-red-900" />
              </button>
              <button className="absolute bottom-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-md flex flex-row font-semibold">
                <ShoppingCartIcon className="w-6 h-6" />
                ADD TO CART
              </button>
            </CardHeader>

            <CardBody className="text-left">
              <Typography variant="h4" color="brown" className="mb-2 uppercase">
                Deer
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Amit Chaudary
              </Typography>
              <Typography variant="h4" color="black">
                $10,000/-
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-72 m-5 flex-shrink-0">
            <CardHeader
              floated={false}
              className="relative h-60 flex items-center justify-center"
            >
              <img
                src="https://img.freepik.com/free-photo/red-deer-nature-habitat-during-deer-rut-european-wildlife_475641-943.jpg?w=360&t=st=1700880378~exp=1700880978~hmac=6ecb12ec0b637d600431bf5e1ad99e7e4cd821ddb956ab1700613029bda9803a"
                alt="profile-picture"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-full">
                <HeartIcon className="w-6 h-6 hover:text-red-900" />
              </button>
              <button className="absolute bottom-0 right-0 m-2 p-2 bg-blue-gray-50 text-black rounded-md flex flex-row font-semibold">
                <ShoppingCartIcon className="w-6 h-6" />
                ADD TO CART
              </button>
            </CardHeader>

            <CardBody className="text-left">
              <Typography variant="h4" color="brown" className="mb-2 uppercase">
                Deer
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Amit Chaudary
              </Typography>
              <Typography variant="h4" color="black">
                $10,000/-
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="w-full justify-end flex mb-5 pr-5">
          <div className="flex flex-row align-middle items-center">
            <a href="">
              <Typography className="uppercase font-semibold text-lg">
                View all
              </Typography>
            </a>
            <ArrowRightIcon className="w-8 h-8 text-white bg-brown-500 rounded-full p-1 m-3" />
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <div className="flex rounded-md md:w-4/5 my-5">
          <div className="flex flex-col md:flex-row">

            <div className="flex h-1/2 md:h-full md:w-full relative overflow-hidden m-2">
              <img
                src="https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1688988971602.jpg" // Replace with your left image source
                alt="Left Image 2"
                className="object-cover"
              />
              <div className="absolute inset-0 after:bottom-0 after:block after:content-[''] after:absolute after:w-full after:h-1/4 after:bg-gradient-to-t after:from-black after:to-transparent"></div>
              <div className="absolute inset-0 flex items-end pb-7 justify-center">
    <h2 className="text-white text-2xl font-bold uppercase">Below 10,000</h2>
  </div>
            </div>
            <div className="flex h-1/2 md:h-full md:w-full relative overflow-hidden m-2">
              <img
                src="https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1688988971602.jpg" // Replace with your left image source
                alt="Left Image 2"
                className="object-cover"
              />
              <div className="absolute inset-0 after:bottom-0 after:block after:content-[''] after:absolute after:w-full after:h-1/4 after:bg-gradient-to-t after:from-black after:to-transparent"></div>
              <div className="absolute inset-0 flex items-end pb-7 justify-center">
    <h2 className="text-white text-2xl font-bold uppercase">From 10,000 - 20,000</h2>
  </div>
            </div>
          </div>

          <div className="flex h-full relative overflow-hidden m-2">
            <img
              src="https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/52279cce-611d-4f9f-b246-135a53e2173d_gtJUsRR.jpeg" // Replace with your right image source
              alt="Right Image"
              className="object-cover"
            />
            <div className="absolute inset-0 after:bottom-0 after:block after:content-[''] after:absolute after:w-full after:h-1/4 after:bg-gradient-to-t after:from-black after:to-transparent"></div>
            <div className="absolute inset-0 flex items-end pb-7 justify-center">
    <h2 className="text-white text-2xl font-bold uppercase">Above 20,000</h2>
  </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
