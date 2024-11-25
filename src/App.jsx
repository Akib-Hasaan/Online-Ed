// All Imports 
import './App.css'

// All Imported Components Starts 
import Flex from './components/Flex'
import Image from './components/Image'
import Menu from './components/Menu'
import Container from './components/Container'
import Button from './components/Button'
import Heading from './components/Heading'
// All Imported Components Ends

// All Imported Images Starts
import Logo from './assets/Logo.png'
import Banner from './assets/bannerImage.png'
import line from './assets/achievements_line.png'
import list1 from './assets/list1.png'
import list2 from './assets/list2.png'
import list3 from './assets/list3.png'
import list4 from './assets/list4.png'
import porer from './assets/porer.png'
import courselist1 from './assets/courselist1.png'
import courselist2 from './assets/courselist2.png'
import courselist3 from './assets/courselist3.png'
import courselist4 from './assets/courselist4.png'
import courselist5 from './assets/courselist5.png'
import courselist6 from './assets/courselist6.png'
import coursestaricon from './assets/coursestaricon.png'
import quotationSign from './assets/quotationSign.png'
import reviewline from './assets/reviewline.png'
import profilepicture from './assets/profilepicture.png'
import footerlogo from './assets/footerlogo.png'
import sociallogo from './assets/sociallogo.png'
import footerline from './assets/footerline.png'
// All Imported Images Ends
// All Imports

function App() {
  return (
    <>
{/* Navigation Bar Starts */}
<div className="py-[11px]">
<Container className={"max-w-[1560px]"}>
    <Flex className={"justify-between"}>
      <div className="pt-[24px]">
        <Image src={Logo} alt={Logo}/>
      </div>
      <div className="pt-[33px]">
        <Flex className={"gap-x-[50px] font-pop text-[22px]"}>
        <Menu text={"Home"} className={"font-bold text-hometxtColor hover:bg-hometxtColor hover:text-white rounded-lg "}/>
        <Menu text={"Course"} className={"hover:text-buttonColor"}/>
        <Menu text={"Monitors"} className={"hover:text-buttonColor"}/>
        <Menu text={"About"} className={"hover:text-buttonColor"}/>
        </Flex>
      </div>
      <div className="">
        <Button text={"Get Started"} className={"font-pop py-[23px] font-semibold text-[20px] px-[30px]  rounded-[20px] text-banbtntxtColor border border-banbtnborderColor hover:text-black hover:bg-buttonColor hover:border-buttonColor"}/>
      </div>
    </Flex>
    </Container>
</div>
{/* Navigation Bar Ends*/}

{/* Banner Starts */}
<div className="pb-[118px] pt-[86px] bg-bannerColor">
  <Container className={"max-w-bannerContainer"}>
    <Flex className={"justify-between"}>
      <div className="w-1/2">
        <Heading text={"Getting Quality"} className={" inline-block pt-[154px] font-bold font-kar text-[90px] text-bannerh1Color"} as={"h1"}/>
        <Heading text={"Education"} className={"inline-block font-bold font-kar text-[90px] pr-[28px] text-educationColor"} as={"h1"}/>
        <Heading text={"is now"} className={"inline-block font-bold font-kar text-[90px] text-bannerh1Color"} as={"h1"}/>
        <Heading text={"more Easy"} className={"font-bold font-kar text-[90px] text-bannerh1Color pb-[37px]"} as={"h1"}/>
        <Heading text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking"} className={"font-pop font-medium text-[22px] text-bannerpColor pr-[119px] pb-[34px]"} as={"p"}/>
        <Button text={"Join Us Free"} className={"font-pop font-semibold text-xl text-banbtntxtColor py-[23px] px-[40px] border mr-[29px] border-banbtnborderColor bg-bannerColor rounded-[25px] hover:bg-buttonColor hover:text-black  hover:border-buttonColor "}/>
        <Button text={"Join Us Free"} className={"font-pop font-semibold text-xl text-banbtntxtColor py-[23px] px-[40px] bg-bannerColor border border-banbtnborderColor rounded-[25px] hover:bg-buttonColor hover:text-black  hover:border-buttonColor"}/>
      </div>
      <div className="w-1/2">
        <Image src={Banner} alt={Banner}/>
      </div>
    </Flex>
  </Container>
</div>
{/* Banner Ends*/}

{/* Achievement List Starts*/}
<div className="pt-[80px] pb-[80px] bg-achieveColor">
  <Container className={"max-w-achieveContainer"}>
     <Flex>
      <div className="w-[205px] ">
        <Heading text={"8200"} className={"pb-[45px] font-kar font-bold text-[50px] text-white"} as={"h2"}/>
        <Heading text={"Success stories"} className={"font-pop text-[25px] text-white"} as={"h4"}/>
      </div>
      <div className="pl-[106px] pt-[14px] pr-[120px]">
        <Image src={line} alt={line}/>
        </div>
      <div className="w-[205px]">
      <Heading text={"12200"} className={"pb-[45px] font-kar font-bold text-[50px] text-white"} as={"h2"}/>
      <Heading text={"Expert Mentors"} className={"font-pop text-[25px] text-white"} as={"h4"}/>
      </div>
      <div className="pl-[106px] pt-[14px] pr-[128.5px]">
        <Image src={line} alt={line}/>
        </div>
      <div className="w-[205px]">
      <Heading text={"50000"} className={"pb-[45px] font-kar font-bold text-[50px] text-white"} as={"h2"}/>
      <Heading text={"Hours Course"} className={"font-pop text-[25px] text-white"} as={"h4"}/>
      </div>
      <div className="pl-[106px] pt-[14px] pr-[128.5px]">
        <Image src={line} alt={line}/>
        </div>
      <div className="w-[205px]">
      <Heading text={"70000"} className={"pb-[45px] font-kar font-bold text-[50px] text-white"} as={"h2"}/>
      <Heading text={"Active Student"} className={"font-pop text-[25px] text-white"} as={"h4"}/>
      </div>
     </Flex>
  </Container>
</div>
{/* Achievement List Ends*/}

{/* Benefits Starts*/}
<div className="pt-[125px] pb-[120px]">
  <Container className={"max-w-benefith2Container pb-[40px]"}>
  <Heading text={"Benefits of online Education"} className={"font-kar font-bold text-6xl text-bannerh1Color m-auto"} as={"h2"}/>
  </Container>
  <Container className={"max-w-benefitpContainer pb-[85px]"}>
    <Heading text={"It is a long established fact that a reader will be distracted by"} className={"font-pop font-medium text-[22px] text-bannerpColor"} as={"p"}/>
    <Heading text={"by the readable content of a page when looking."} className={"pl-[83px] font-pop font-medium text-[22px] text-bannerpColor"} as={"p"}/>
  </Container>
  <Container className={"max-w-achieveContainer "}>
    <Flex>
      <div className=" bg-bannerColor pl-[30px] pr-[35px] pt-[15px] pb-[40px] border shadow-xl rounded-3xl hover:bg-white">
        <Image src={list1} alt={list1}/>
        <Heading text={"One on One Monitor"} className={"text-bannerh1Color font-kar font-bold text-[30px] pt-[32px] pb-[35px]"} as={"h4"}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className={"font-pop text-[22px] text-bannerpColor"} as={"p"}/>        
      </div>
      <div className="pl-[40px]"></div>
      <div className="bg-bannerColor px-[37px] pt-[15px] pb-[40px] border shadow-xl rounded-3xl hover:bg-white">
      <Image src={list2} alt={list2}/>
        <Heading text={"24/7 Mentor"} className={"text-bannerh1Color font-kar font-bold text-[30px] pt-[32px] pb-[40px]"} as={"h4"}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className={"font-pop text-[22px] text-bannerpColor"} as={"p"}/> 
      </div>
      <div className="pl-[40px]"></div>
      <div className="bg-bannerColor px-[37px] pt-[15px] pb-[40px] border shadow-xl rounded-3xl hover:bg-white">
      <Image src={list3} alt={list3}/>
        <Heading text={"Whiteboard"} className={"text-bannerh1Color font-kar font-bold text-[30px] pt-[32px] pb-[40px]"} as={"h4"}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className={"font-pop text-[22px] text-bannerpColor"} as={"p"}/> 
      </div>
      <div className="pl-[40px]"></div>
      <div className="bg-bannerColor px-[37px] pt-[15px] pb-[40px] border shadow-xl rounded-3xl hover:bg-white">
      <Image src={list4} alt={list4}/>
        <Heading text={"Affordable Price"} className={"text-bannerh1Color font-kar font-bold text-[30px] pt-[32px] pb-[40px]"} as={"h4"}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className={"font-pop text-[22px] text-bannerpColor"} as={"p"}/> 
      </div>
    </Flex>
  </Container>
</div>
{/* Benefits Ends*/}

{/* Video Part Starts */}
<div className="pb-[120px]">
  <Container className={"max-w-navContainer"}>
    <Flex className={"justify-between"}>
      <div className="w-[740px] h-[572px]">
      <Image src={porer} alt={porer}/>
      </div>
      <div className="pt-[100px]">
        <div className="w-[633.25px] h-[409px]">
        <Heading text={"We are Always Ensure Best Course for your learning"} className={"font-robo font-bold text-[58px] pb-[30px] text-vidh2Color"} as={"h1"}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the"} className={"font-pop font-medium text-[22px] text-bannerpColor pb-[32px]"} as={"p"}/>
        <Button text={"Join Here"} className={"px-[40px] py-[24px] font-pop font-semibold text-[20px] border rounded-[25px] border-banbtnborderColor text-banbtntxtColor hover:text-vidh2Color hover:bg-buttonColor hover:border-buttonColor"}/>
        </div>
      </div>
    </Flex>
  </Container>
</div>
{/* Video Part Ends */}

{/* Course List Starts */}
<div className="pb-[134px]">
  <Container className={"max-w-courseh2Container"}>
    <Heading text={"Our Popular Courses"} className={"font-robo font-bold text-[60px] pb-[28px]"} as={"h2"}/>
  </Container>

  <Container className={"max-w-coursepContainer"}>
    <Heading text={"Lorem Ipsum is simply dummy text of the printing and"} className={"font-pop font-medium text-[22px] text-bannerpColor m-auto"} as={"p"}/>
    <Heading text={"typesetting industry. Lorem Ipsum has been th"} className={" pl-[43px] pb-[80px] font-pop font-medium text-[22px] text-bannerpColor m-auto"} as={"p"}/>
  </Container>

  <Container className={"max-w-courselistContainer pb-[49px]"}>
    <Flex className={"justify-between pb-[57px]"}>
    <div className="pb-[27px] bg-bannerColor rounded-3xl shadow-md hover:bg-white">
      <Image src={courselist1} alt={courselist1}/>
      <Heading text={"Web Design : Basic to advance"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] py-[40px]"} as={"h3"}/>
      <Flex>
      <div className="pl-[43px]">
      <Image src={coursestaricon} alt={coursestaricon}/>
      </div>
      <Heading text={"5.0"}  className={"font-pop font-medium text-[18px] pl-[35px] pr-[15px] text-banbtntxtColor"} as={"p"}/>
      <Heading text={"(2 ratings)"}  className={"pt-[3px] font-pop font-medium text-[15px] text-banbtntxtColor"} as={"p"}/>
      </Flex>
      <div className="mt-[55px] pl-[36px]">
      <Button text={"Add to Cart"} className={"px-[108px] py-[17px] rounded-b-2xl rounded-tl-2xl  border border-banbtnborderColor text-banbtntxtColor font-pop font-semibold text-[22px] hover:text-black hover:bg-buttonColor hover:border-buttonColor"}/>
      </div>
    </div>
    <div className="pb-[27px] bg-bannerColor rounded-3xl shadow-md hover:bg-white">
      <Image src={courselist2} alt={courselist2}/>
      <Heading text={"Web Development : Basic to"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pt-[40px]"} as={"h3"}/>
      <Heading text={"advance"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pb-[15px]"} as={"h3"}/>
      <Flex>
      <div className="pl-[43px]">
      <Image src={coursestaricon} alt={coursestaricon}/>
      </div>
      <Heading text={"5.0"}  className={"font-pop font-medium text-[18px] pl-[35px] pr-[15px] text-banbtntxtColor"} as={"p"}/>
      <Heading text={"(2 ratings)"}  className={"pt-[3px] font-pop font-medium text-[15px] text-banbtntxtColor"} as={"p"}/>
      </Flex>
      <div className="pt-[42px] pl-[36px]">
      <Button text={"Add to Cart"} className={"px-[108px] py-[17px] rounded-b-2xl rounded-tl-2xl  border border-banbtnborderColor text-banbtntxtColor font-pop font-semibold text-[22px] hover:text-black hover:bg-buttonColor hover:border-buttonColor"}/>
      </div>
    </div>
    <div className="pb-[27px] bg-bannerColor rounded-3xl shadow-md hover:bg-white">
      <Image src={courselist3} alt={courselist3}/>
      <Heading text={"Digital Marketing : Basic to"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pt-[40px]"} as={"h3"}/>
      <Heading text={"advance"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pb-[15px]"} as={"h3"}/>
      <Flex>
      <div className="pl-[43px]">
      <Image src={coursestaricon} alt={coursestaricon}/>
      </div>
      <Heading text={"5.0"}  className={"font-pop font-medium text-[18px] pl-[35px] pr-[15px] text-banbtntxtColor"} as={"p"}/>
      <Heading text={"(2 ratings)"}  className={"pt-[3px] font-pop font-medium text-[15px] text-banbtntxtColor"} as={"p"}/>
      </Flex>
      <div className="pt-[42px] pl-[36px]">
      <Button text={"Add to Cart"} className={"px-[108px] py-[17px] rounded-b-2xl rounded-tl-2xl  border border-banbtnborderColor text-banbtntxtColor font-pop font-semibold text-[22px] hover:text-black hover:bg-buttonColor hover:border-buttonColor"}/>
      </div>
    </div> 
    </Flex>
    <Flex className={"justify-between"}>
    <div className="pb-[27px] bg-bannerColor rounded-3xl shadow-md hover:bg-white">
      <Image src={courselist4} alt={courselist4}/>
      <Heading text={"App Design : Basic to advance"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] py-[40px]"} as={"h3"}/>
      <Flex>
      <div className="pl-[43px]">
      <Image src={coursestaricon} alt={coursestaricon}/>
      </div>
      <Heading text={"5.0"}  className={"font-pop font-medium text-[18px] pl-[35px] pr-[15px] text-banbtntxtColor"} as={"p"}/>
      <Heading text={"(2 ratings)"}  className={"pt-[3px] font-pop font-medium text-[15px] text-banbtntxtColor"} as={"p"}/>
      </Flex>
      <div className="mt-[55px] pl-[36px]">
      <Button text={"Add to Cart"} className={"px-[108px] py-[17px] rounded-b-2xl rounded-tl-2xl  border border-banbtnborderColor text-banbtntxtColor font-pop font-semibold text-[22px] hover:text-black hover:bg-buttonColor hover:border-buttonColor"}/>
      </div>
    </div>
    <div className="pb-[27px] bg-bannerColor rounded-3xl shadow-md hover:bg-white">
      <Image src={courselist5} alt={courselist5}/>
      <Heading text={"Mobile Design : Basic to"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pt-[40px]"} as={"h3"}/>
      <Heading text={"advance"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pb-[15px]"} as={"h3"}/>
      <Flex>
      <div className="pl-[43px]">
      <Image src={coursestaricon} alt={coursestaricon}/>
      </div>
      <Heading text={"5.0"}  className={"font-pop font-medium text-[18px] pl-[35px] pr-[15px] text-banbtntxtColor"} as={"p"}/>
      <Heading text={"(2 ratings)"}  className={"pt-[3px] font-pop font-medium text-[15px] text-banbtntxtColor"} as={"p"}/>
      </Flex>
      <div className="pt-[42px] pl-[36px]">
      <Button text={"Add to Cart"} className={"px-[108px] py-[17px] rounded-b-2xl rounded-tl-2xl  border border-banbtnborderColor text-banbtntxtColor font-pop font-semibold text-[22px] hover:text-black hover:bg-buttonColor hover:border-buttonColor"}/>
      </div>
    </div>
    <div className="pb-[27px] bg-bannerColor rounded-3xl shadow-md hover:bg-white">
      <Image src={courselist6} alt={courselist6}/>
      <Heading text={"Graphics Design : Basic to"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pt-[40px]"} as={"h3"}/>
      <Heading text={"Advance"} className={"font-robo font-bold text-[25px] text-courseh3Color pl-[43px] pb-[15px]"} as={"h3"}/>
      <Flex>
      <div className="pl-[43px]">
      <Image src={coursestaricon} alt={coursestaricon}/>
      </div>
      <Heading text={"5.0"}  className={"font-pop font-medium text-[18px] pl-[35px] pr-[15px] text-banbtntxtColor"} as={"p"}/>
      <Heading text={"(2 ratings)"}  className={"pt-[3px] font-pop font-medium text-[15px] text-banbtntxtColor"} as={"p"}/>
      </Flex>
      <div className="pt-[42px] pl-[36px]">
      <Button text={"Add to Cart"} className={"px-[108px] py-[17px] rounded-b-2xl rounded-tl-2xl  border border-banbtnborderColor text-banbtntxtColor font-pop font-semibold text-[22px] hover:text-black hover:bg-buttonColor hover:border-buttonColor"}/>
      </div>
    </div>
    </Flex>
  </Container>

  <Container className={"max-w-buttonContainer"}>
    <Button text={"See More"} className={"px-[45px] py-[23px] rounded-3xl font-pop font-semibold text-[20px] border border-banbtnborderColor text-banbtntxtColor hover:bg-buttonColor hover:text-vidbtnColor hover:border-buttonColor"}/>
  </Container>
</div>
{/* Course List Ends */}

{/* Reviews Start */}
<div className="pb-[120px]">
  <Container className={"max-w-reviewh2Container pb-[20px]"}>
    <Heading text={"What our Students say"} className={"font-robo font-bold text-[60px] text-vidbtnColor"} as={"h2"}/>
  </Container>
  <Container className={"max-w-reviewpContainer pb-[55px]"}>
    <Heading text={"There are many variations of passages of Lorem Ipsum available."} className={"font-pop font-semibold text-[22px] text-reviewpColor"} as={"p"}/>
  </Container>
  <Container className={"max-w-navContainer"}>
    <Flex className={"justify-between gap-x-11"}>
      <div className="px-[42px] py-[53px] bg-bannerColor hover:bg-white rounded-[20px] shadow-md border border-white hover:border-bannerColor">
        <Heading text={"Great Platform"} className={"font-robo font-bold text-[30px] text-vidbtnColor pb-[38px]"} as={"h3"}/>
        <Image src={quotationSign} alt={quotationSign}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"} className={"pt-8 pb-10 font-pop text-[22px] text-reviewpColor"} as={"p"}/>
        <Image src={reviewline} alt={reviewline}/>
        <div className="pt-5"></div>
        <Flex>
          <Image src={profilepicture} alt={profilepicture}/>
          <div className="pl-3.5">
            <Heading text={"Bet Luna"} className={"pb-2 font-DMsans font-bold text-xl text-reviewpColor"} as={"h4"}/>
            <Image src={coursestaricon} alt={coursestaricon}/>
          </div>
        </Flex>
      </div>
      <div className="px-[42px] py-[53px] bg-bannerColor hover:bg-white rounded-[20px] shadow-md border border-white hover:border-bannerColor">
        <Heading text={"Great Platform"} className={"font-robo font-bold text-[30px] text-vidbtnColor pb-[38px]"} as={"h3"}/>
        <Image src={quotationSign} alt={quotationSign}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"} className={"pt-8 pb-10 font-pop text-[22px] text-reviewpColor"} as={"p"}/>
        <Image src={reviewline} alt={reviewline}/>
        <div className="pt-5"></div>
        <Flex>
          <Image src={profilepicture} alt={profilepicture}/>
          <div className="pl-3.5">
            <Heading text={"Belinda Gomez"} className={"pb-2 font-DMsans font-bold text-xl text-reviewpColor"} as={"h4"}/>
            <Image src={coursestaricon} alt={coursestaricon}/>
          </div>
        </Flex>
      </div>
      <div className="px-[42px] py-[53px] bg-bannerColor hover:bg-white rounded-[20px] shadow-md border border-white hover:border-bannerColor">
        <Heading text={"Great Platform"} className={"font-robo font-bold text-[30px] text-vidbtnColor pb-[38px]"} as={"h3"}/>
        <Image src={quotationSign} alt={quotationSign}/>
        <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"} className={"pt-8 pb-10 font-pop text-[22px] text-reviewpColor"} as={"p"}/>
        <Image src={reviewline} alt={reviewline}/>
        <div className="pt-5"></div>
        <Flex>
          <Image src={profilepicture} alt={profilepicture}/>
          <div className="pl-3.5">
            <Heading text={"Howard Clayton"} className={"pb-2 font-DMsans font-bold text-xl text-reviewpColor"} as={"h4"}/>
            <Image src={coursestaricon} alt={coursestaricon}/>
          </div>
        </Flex>
      </div>
    </Flex>
  </Container>
</div>
{/* Reviews End */}

{/* Footer Starts */}
<div className="pt-[130px] pb-[50px] bg-achieveColor">
  <Container className={"max-w-footerContainer"}>
    <Flex className={"pb-[171px]"}>
      <div className="pr-[336px]">
        <Image src={footerlogo} alt={footerlogo} />
        <Heading text={"Follow our social media"} className={"pt-[30px] pb-[23px] font-pop font-medium text-2xl text-white"} as={"h4"}/>
        <Image src={sociallogo} alt={sociallogo} />
      </div>
      <div className="pt-3 pr-[295px]">
        <Heading text={"Links"} className={"font-robo font-bold text-3xl text-white pb-[30px]"} as={"h4"}/>
        <Menu text={"Home"} className={"pb-[40px] font-pop text-xl text-white"}/>
        <Menu text={"Help Center"} className={"pb-[40px] font-pop text-xl text-white"}/>
        <Menu text={"Service"} className={"font-pop text-xl text-white"}/>
      </div>
      <div className="pt-3 pr-[245px]">
        <Heading text={"Resource"} className={"font-robo font-bold text-3xl text-white pb-[30px]"} as={"h4"}/>
        <Menu text={"About Us"} className={"pb-[40px] font-pop text-xl text-white"}/>
        <Menu text={"Carrier"} className={"pb-[40px] font-pop text-xl text-white"}/>
        <Menu text={"Legal Notice"} className={"font-pop text-xl text-white"}/>
      </div>
      <div className="pt-3">
        <Heading text={"Contacts"} className={"font-robo font-bold text-3xl text-white pb-[30px]"} as={"h4"}/>
        <Menu text={"192.New York"} className={"pb-[40px] font-pop text-xl text-white"}/>
        <Menu text={"Support"} className={"pb-[40px] font-pop text-xl text-white"}/>
        <Menu text={"+1125156363"} className={"font-pop text-xl text-white"}/>
      </div>
    </Flex>
    <Container className={"max-w-footerlineContainer pb-9"}>
      <Image src={footerline} alt={footerline}/>
    </Container>
    <Container className={"max-w-copyrightContainer"}>
      <Heading text={"Copyright 2020@, all rights reserved."} className={"font-robo text-xl text-white"} as={"p"}/>
    </Container>
    
  </Container>
</div>
{/* Footer Starts */}

    </>
  )
}

export default App
