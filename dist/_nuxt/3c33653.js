(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5,16],{277:function(e,t,n){"use strict";n.r(t);var o={props:["pageHeading","pageDesc"],mounted:function(){$(".bg-img").each((function(){var e=$(this).children("img").attr("src");$(this).parent().css({"background-image":"url("+e+")","background-size":"cover","background-position":"center"}),$(this).parent().addClass("bg-img"),$(this).hasClass("background-size-auto")&&$(this).parent().addClass("background-size-auto"),$(this).remove()}))}},r=n(44),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"page-title page-title-layout1 bg-overlay"},[e._m(0),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 d-flex justify-content-between flex-wrap align-items-center"},[t("h1",{staticClass:"pagetitle__heading text-light"},[e._v(e._s(e.pageHeading))]),e._v(" "),t("p",{staticClass:"pagetitle__desc text-light"},[e._v("\n                    "+e._s(e.pageDesc)+"\n                ")]),e._v(" "),t("nav",[t("ol",{staticClass:"breadcrumb my-3"},[t("li",{staticClass:"breadcrumb-item"},[t("NuxtLink",{staticClass:"text-white",attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),t("li",{staticClass:"breadcrumb-item text-white active",attrs:{"aria-current":"page"}},[e._v(e._s(e.pageHeading))])])])])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"bg-img"},[e("img",{attrs:{src:"/images/page-titles/2.jpg",alt:"background"}})])}],!1,null,null,null);t.default=component.exports},278:function(e,t,n){"use strict";n.r(t);var o={name:"BlogDetail",props:["detailDesc","blogTitle","blogImage"]},r=n(44),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("section",{staticClass:"blog blog-single pt-0 pb-80"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[t("div",{staticClass:"post-item mb-0"},[t("div",{staticClass:"post__img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:e.blogImage,alt:"post image",loading:"lazy"}})])]),e._v(" "),t("div",{staticClass:"post__body pb-0"},[t("div",{staticClass:"post__meta-cat"}),e._v(" "),t("div",{staticClass:"post__meta d-flex align-items-center mb-20"}),e._v(" "),t("h1",{staticClass:"post__title mb-30"},[e._v("\n                "+e._s(e.blogTitle)+"\n              ")]),e._v(" "),t("div",{staticClass:"post__desc"},[t("p",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.detailDesc))])])])])])])])])])}),[function(){var e=this._self._c;return e("section",{staticClass:"page-title pt-30 pb-30 text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"})])])}],!1,null,"f2c19fba",null);t.default=component.exports},314:function(e,t,n){"use strict";n.r(t);var o={name:"blog1",components:{BlogDetail:n(278).default}},r=n(44),component=Object(r.a)(o,(function(){var e=this._self._c;return e("div",[e("PageTitle",{attrs:{pageHeading:"Blog Detail",pageSubHeading:"blogs"}}),this._v(" "),e("BlogDetail",{attrs:{blogImage:"/images/blog/grid/1.jpeg",blogTitle:"Meet the Summer 2022 E-Team Cohort!",detailDesc:"We are excited to announce the 17 early-stage student innovator teams that have been accepted into our Summer 2022 E-Team Grant Program! Teams were chosen based on the potential for their innovation to have a significant positive social, health, or environmental impact. Eleven teams will receive a $5,000 Stage 1 grant. An additional six teams have been selected to advance to the next stage of the program and will be awarded $20,000 Stage 2 grants to support the development of their innovations.\n\nFrom wearable spinal monitoring technology to a medical assistive eating device, the members of the Summer 2022 E-Team cohort are designing groundbreaking technological solutions to a variety of challenges. Gum & Gums, a team from Montclair State University, is developing an autonomous device that flosses all of your teeth simultaneously. Another example is GismoPower, a team from the New College of Florida that is developing a portable solar system canopy on wheels, delivering a high-powered charger that can be stored on a driveway for both renters and homeowners.AM Therapeutics | Purdue University-Main Campus\nAM Therapeutics is developing a therapeutic glove that uses heat, vibration, and compression to treat joint pain in the hands of individuals with arthritis and related conditions.\n\nCurveAssure | Johns Hopkins University\nCurveAssure is developing a wearable spinal monitoring technology to enable at-home analysis that provides physicians with information which allows them to enable faster data-driven patient care and surgical decision-making.\n\nGum & Gums | Montclair State University\nGum & Gums is developing an autonomous device that flosses all of a user’s teeth simultaneously.\n\nMicrobeBlaster | University of Massachusetts Amherst\nMicrobeBlaster is developing a biofilm coating that prevents bacteria from making and maintaining contact on the surface of implantable medical devices.\n\nPediafeed | Johns Hopkins University\nPediafeed is developing a safer, simpler, and more secure pediatric feeding tube to address the most common complications—such as displacement—that are associated with current long-term assisted feeding.\n\nRexSim | Montana State University\nRexSim is developing an electrocardiogram (ECG) didactic and manual skills training platform to measure the knowledge and skills fundamental to ECG performance for clinicians working in ECG test administration and interpretation.\n\nSteadyScrib | Northwestern University\nSteadyScrib is developing a manual writing tool designed for people with Parkinson’s disease, concentrating on counteracting writing-inhibitive Parkinson’s symptoms.\n\nUroDeflect | Johns Hopkins University\nUroDeflect is developing a catheter for patients who suffer from urinary system injuries that integrates a balloon and elastic funnel to create a pressure gradient which diverts enough urine to allow the body to heal.Glow Ink Solutions | Medical University of South Carolina\nThe carbon black ink used by surgeons to mark tumors can be hard to detect if placed in a location that is difficult to visualize. Glow Ink Solutions is developing an injectable biomarker that glows to make it easier for surgeons to detect marked tumors during surgery.\n\nNephra | University of Illinois at Urbana-Champaign\nHeightened potassium or hyperkalemia is a common challenge for patients with chronic kidney disease and is associated with an increase in mortality due to cardiac events. Nephra is developing predictive algorithms that can be used for kidney disease patients.\n\nPulseFlex | Dartmouth College\nCurrently, there is no technology available on the market that gives patients with hypertension a means of continuously monitoring their cardiac health at any time. PulseFlex is developing a flexible, wearable sensor that can accurately and continuously monitor vital cardiovascular signs, such as blood pressure and heart rate, giving patients with hypertension a way to monitor their cardiac health anywhere and any time.\n\nSteadiSpoon™ | Southern Methodist University\nFor people who suffer from Parkinson’s disease and essential tremors, current motorized solutions for hand tremors are expensive, not machine washable, and require charging. SteadiSpoon™ is developing an affordable self-stabilizing eating utensil designed to help people who suffer from Parkinson’s and essential tremors.\n\nThe E-Team entrepreneurial journey\nEach Stage 1 team will take part in our intensive Pioneer training program, where they will learn the steps needed to advance their projects out of the university lab and into the market.\n\n“Our Pioneer workshop will provide innovators with the opportunity to build on their existing entrepreneurial skills, connect with and receive feedback from industry-leading mentors, and discover new pathways for their venture,” said E-Team Program Officer Sarah Wharmby.\n\nThe Stage 2 teams will take part in the Propel training workshop, where they will work to develop and validate their business model through customer discovery interviews and prototype development and establish their intellectual property portfolio. Propel helps early-stage innovators map and validate the pathway for their venture, digging into business model design and creating action plans to engage stakeholders and de-risk their venture.\n\nAbout the E-Team Grant Program\nThrough the E-Team program, we have trained over 500 student teams and more than 1,300 student innovators. Our teams have raised close to $700M+ in follow-on funding and have launched 400+ ventures since taking part in our program."}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageTitle:n(277).default,BlogDetail:n(278).default})}}]);