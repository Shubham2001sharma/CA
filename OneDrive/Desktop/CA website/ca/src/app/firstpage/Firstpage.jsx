'use client'
import React from "react";
import { FaMobile, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdWatchLater } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

function FirstPage() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-black w-full h-10 pl-20 pt-2 flex items-center">
        {/* Mobile and Email */}
        <div className="flex items-center mr-10">
          <FaMobile className="text-white" />
          <span className="text-white ml-2">123456789</span>
        </div>
        <div className="flex items-center">
          <MdEmail className="text-white" />
          <span className="text-white ml-2">s2gmail.com</span>
        </div>
        {/* Social Icons */}
        <div className="ml-auto flex mr-10 gap-3">
          <FaFacebook className="text-white" />
          <FaInstagram className="text-white" />
          <IoLogoWhatsapp className="text-white" />
          <span className="text-white">icon</span>
        </div>
      </div>


      {/* Company Info Section */}
      <div className="bg-white p-4 flex justify-between border-b-2">
        <div className="flex items-center ml-20">
          <img
             src="/path/to/company-logo.png"
            alt="Company Logo"
            className="h-8 w-8 mr-5"
          />
          <h1 className="text-xl font-bold">Company Name</h1>
        </div>

      
        <div className="flex items-center">
          <div className="mr-1">
            <span className="text-gray-600 text-4xl">
              <MdWatchLater />
            </span>
          </div>
          <p className="mt-2">
            <span className="ml-3">Contact time:</span> <br />
            <span className="ml-3">mon to sat:</span> 9:00am to 7:00pm
          </p>
        </div>
      </div>


      {/* Navbar Section */}
      <div className="bg-gray-900 w-full h-10 flex items-center">
        <div className="flex gap-10 text-blue-500 ml-96">
          <span className="hover:text-blue-100 cursor-pointer">Home</span>
          <span className="hover:text-blue-100 cursor-pointer">Our Team</span>
          <span className="hover:text-blue-100 cursor-pointer">Contact Us</span>
          <span className="hover:text-blue-100 cursor-pointer">Services</span>
          <span className="hover:text-blue-100 cursor-pointer">Strength</span>
          <span className="hover:text-blue-100 cursor-pointer">Industry We Serve</span>
        </div>
      </div>



      <section className="banner-sec">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
    
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          {/* <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li> */}
        </ol>
        
        {/* Carousel Inner */}
        <div className="carousel-inner ">
          <div className="item active">
            
            <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/banner1.jpg" alt="banner1" />
          </div>
          {/* <div className="item">
            <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/banner2.jpg" alt="banner2" />
          </div>
          <div className="item">
            <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/banner3.jpg" alt="banner3" />
          </div>
          <div className="item">
            <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/banner4.jpg" alt="banner4" />
          </div>
          <div className="item">
            <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/banner5.jpg" alt="banner5" />
          </div> */}
        </div>
        
        {/* Carousel Controls */}
        {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a> */}
      </div>
    </section>




    <section className="hm-text-sec bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold  mb-8 capitalize">
        LOREM IPSUM IS SIMPLY DUMMY <span className="text-blue-500">TEXT OF THE PRINTING</span>
        </h1>
        <p className="text-gray-700 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="text-gray-700 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </section>



    <section className="hm-services-sec bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our <span>Services</span></h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="services-box-item border border-black rounded-lg p-6 h-full flex flex-col items-center justify-between transition-all duration-300 hover:bg-blue-200 hover:text-grey-900">
              <div className="icons mb-4">
                <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/audit.png" alt="" className="h-" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Audit And Assurance Services</h4>
                <p className="text-gray-700 pt-8">Bank Statutory Audits, Concurrent Audits and Stock Audits</p>
                <div className="more"><a href="#" className="text-blue-500 inline-flex  text-end">Read More <i className="fa fa-long-arrow-right ml-1"></i></a></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="mt-auto">
                <line className="top" x1="0" y1="0" x2="900" y2="0"></line>
                <line className="left" x1="0" y1="100%" x2="0" y2="-920"></line>
                <line className="bottom" x1="100%" y1="100%" x2="-600" y2="100%"></line>
                <line className="right" x1="100%" y1="0" x2="100%" y2="1380"></line>
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="services-box-item border border-black rounded-lg p-6 h-full flex flex-col items-center justify-between transition-all duration-300 hover:bg-blue-200 hover:text-grey-900">
              <div className="icons mb-4">
                <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/business-solutions.png" alt="" className="h-" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Business Solutions</h4>
                <p className="text-gray-700 pt-8">Business plan, cash flow projections, budgets, trading forecasts and funds raising.</p>
                <div className="more"><a href="#" className="text-blue-500 inline-flex items-center">Read More <i className="fa fa-long-arrow-right ml-1"></i></a></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="mt-auto">
                <line className="top" x1="0" y1="0" x2="900" y2="0"></line>
                <line className="left" x1="0" y1="100%" x2="0" y2="-920"></line>
                <line className="bottom" x1="100%" y1="100%" x2="-600" y2="100%"></line>
                <line className="right" x1="100%" y1="0" x2="100%" y2="1380"></line>
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="services-box-item border border-black rounded-lg p-6 h-full flex flex-col items-center justify-between transition-all duration-300 hover:bg-blue-200 hover:text-grey-900">
              <div className="icons mb-4">
                <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/corporate-law.png" alt="" className="h-" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Corporate Law</h4>
                <p className="text-gray-700 pt-8">Advise on liquidation / de-registration of companies under the Companies Act.</p>
                <div className="more"><a href="#" className="text-blue-500 inline-flex items-center">Read More <i className="fa fa-long-arrow-right ml-1"></i></a></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="mt-auto">
                <line className="top" x1="0" y1="0" x2="900" y2="0"></line>
                <line className="left" x1="0" y1="100%" x2="0" y2="-920"></line>
                <line className="bottom" x1="100%" y1="100%" x2="-600" y2="100%"></line>
                <line className="right" x1="100%" y1="0" x2="100%" y2="1380"></line>
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0 md:col-md-offset-2">
          <div className="services-box-item border border-black rounded-lg p-6 h-full flex flex-col items-center justify-between transition-all duration-300 hover:bg-blue-200 hover:text-grey-900">
              <div className="icons mb-4">
                <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/direct-tax.png" alt="" className="h-" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Direct Tax</h4>
                <p className="text-gray-700 pt-8">‘Represent’ and  ‘advise on representation’  before  the  income tax authorities.</p>
                <div className="more"><a href="#" className="text-blue-500 inline-flex items-center">Read More <i className="fa fa-long-arrow-right ml-1"></i></a></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="mt-auto">
                <line className="top" x1="0" y1="0" x2="900" y2="0"></line>
                <line className="left" x1="0" y1="100%" x2="0" y2="-920"></line>
                <line className="bottom" x1="100%" y1="100%" x2="-600" y2="100%"></line>
                <line className="right" x1="100%" y1="0" x2="100%" y2="1380"></line>
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0 md:col-md-offset-2">
          <div className="services-box-item border border-black rounded-lg p-6 h-full flex flex-col items-center justify-between transition-all duration-300 hover:bg-blue-200 hover:text-grey-900">
              <div className="icons mb-4">
                <img src="https://caportal.saginfotech.com/caportal/ca-template-1/images/indirect-tax.png" alt="" className="h-" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Indirect Tax</h4>
                <p className="text-gray-700 pt-8">Help file and register with sales tax, central excise and service tax authorities.</p>
                <div className="more"><a href="#" className="text-blue-500 inline-flex items-center">Read More <i className="fa fa-long-arrow-right ml-1"></i></a></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="mt-auto">
                <line className="top" x1="0" y1="0" x2="900" y2="0"></line>
                <line className="left" x1="0" y1="100%" x2="0" y2="-920"></line>
                <line className="bottom" x1="100%" y1="100%" x2="-600" y2="100%"></line>
                <line className="right" x1="100%" y1="0" x2="100%" y2="1380"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="relative h-screen bg-cover bg-center mb-20" style={{ backgroundImage: `url('/news-bg.jpg')` }}>
      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-6xl font-bold pt-10">News <span className="text-blue-500">Section</span></h2>

        {/* Cards container */}
        <div className="mt-10 flex justify-center space-x-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-72">
            <h3 className="text-xl font-bold mb-2">Card 1</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et sapien luctus.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read More</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-72">
            <h3 className="text-xl font-bold mb-2">Card 2</h3>
            <p className="text-gray-700">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read More</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-72">
            <h3 className="text-xl font-bold mb-2">Card 3</h3>
            <p className="text-gray-700">Fusce a metus blandit, mollis arcu et, dictum justo. Donec sed ex eget odio condimentum commodo.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read More</button>
          </div>
        </div>
      </div>
    </div>




    <section className="enquiry-sec mb-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Request a <span className="text-blue-500">Call Back</span></h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="mb-4">
              <input type="text" id="txtname" name="txtname" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" placeholder="Enter Name *" />
              <span className="errer" style={{ color: 'red', visibility: 'hidden' }}>*</span>
            </div>
            <div className="mb-4">
              <input type="text" id="txtmail" name="txtmail" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" placeholder="Enter Email Address *" />
              <span className="errer" style={{ color: 'red', visibility: 'hidden' }}>*</span>
            </div>
            <div>
              <input type="text" id="txtcontact" name="txtcontact" maxLength="12" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" placeholder="Enter Phone" onKeyPress={(e) => e.charCode >= 48 && e.charCode <= 57} />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="mb-4">
              <textarea id="txtremark" name="txtremark" rows="5" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" placeholder="Type your message here"></textarea>
            </div>
            <div>
              <button type="submit" className=" bg-blue-500 hover:bg-blue-600 text-black py-2 px-4 rounded-md" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>



    <footer className="bg-gray-800 text-white">
      {/* Footer Opening Section */}
      <div className="foote-link py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Quick Links */}
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="foot-link-list">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Career</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-lg font-semibold mb-4">Services</h2>
              <ul className="foot-link-list">
                <li><a href="#" className="text-gray-300 hover:text-white">Audit And Assurance Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Business Solutions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Corporate Law</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Direct Tax</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Indirect Tax</a></li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-lg font-bold mb-4">Opening Hours</h2>
              <ul className="list-foot">
                <li className="flex gap-2">
                  <span>Mon-Sat:</span>
                  <div className="text-gray-300">9.30am-7.00pm</div>
                </li>
                <li className="flex gap-2">
                  <span>Sun:</span>
                  <div className="text-gray-300">Close</div>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
              <ul className="call-ad">
                <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><i className="fa fa-map-marker mr-2"></i> <span>B-9, Second Floor, Mahalaxmi Nagar, Behind WTP South Block, Malviya Nagar, Jaipur - 302017(Raj.)</span></a></li>
                <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><i className="fa fa-phone mr-2"></i> <span>0141-4072000</span></a></li>
                <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><i className="fa fa-envelope-o mr-2"></i> <span>caportal@sagipl.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copy-right bg-gray-700 py-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <p className="text-sm text-gray-300">&copy; SAG Infotech Private Limited. All Rights reserved.</p>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <p className="text-sm text-gray-300">Designed &amp; Developed by: SAG Infotech Pvt Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
   
    </>
  );
}

export default FirstPage;
