import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {

            vi: {
                translation: {
                    menu: {
                        home: "Trang chủ",
                        about: "Thông tin",
                        resume: "Tóm tắt",
                        portfolio: "Hoạt động",
                        blog: "Blog",
                        contact: "Liên hệ"
                    },

                    'downloadCV': "Tải CV",
                    about: {
                        pageTitle: {
                            about: "Sơ lược về",
                            me: "tôi"
                        },
                        aboutMe: {
                            part1: `Đây là công việc tôi luôn đam mê và muốn theo đuổi, là một lập trình viên có kỹ năng, tôi luôn phấn đấu và cố gắng để phát triển kỹ năng nghề nghiệp, đồng thời luôn muốn học những thứ mới cũng như chuyên sâu về kỹ năng về mảng lập trình Web.`,
                            part2: "Tinh thần làm việc nhóm trong ngành là rất quan trọng, bạn không thể hoàn thành tốt một dự án khi không có sự cởi mở trong công việc. Trách nhiệm và cái tâm với nghề sẽ thể hiện trong từng dự án cũng như cách bạn làm việc.",
                            part3: "Không ai là hoàn hảo, vì vậy ta sẽ cần sự nỗ lực từng ngày từng giờ để có thể đạt được thứ ta mong muốn."
                        },
                        information: {
                            title: {
                                tuoi: "Tuổi",
                                noiCuTru: "Nơi cư trú",
                                diaChi: "Địa chỉ",
                                soDienThoai: "Số điện thoại"
                            }
                        },
                        whatIdo: {
                            title: {
                                what: "Những gì",
                                iDo: "tôi làm"
                            },

                            web: {
                                info: "Tạo và xây dựng các hệ thống website có yêu cầu bảo mật cao và tốc độ nhanh dựa trên các công nghệ hiện đại như NodeJS, .NetCore, .NET, RabbitMQ, Kafka, Docker, Redis, .... Cùng với đó là các cơ sở dữ liệu như MSSQL, MongoDB, Elasticsearch. Sử dụng nhiều ngôn ngữ khác nhau để tối ưu hệ thống như Javascript, C#, Python, Golang, ..."
                            },
                            thuongMaiDienTu: {
                                title: "Thương mại điện tử",
                                info: "Có kinh nghiệm trong việc xây dựng, cấu trúc, tối ưu các hệ thống thương mại điện tử lớn nhỏ dựa trên các công nghệ khác nhau."
                            },
                            sangTaoNoiDung: {
                                title: "Sáng tạo nội dung",
                                info: "Xây dựng các phần mềm, API và các công cụ hỗ trợ theo yêu cầu của khách hàng. Quản lý fanpage, nhập văn bản dữ liệu, thu thập dữ liệu các website, làm tool chức năng cho Chrome theo yêu cầu của khách hàng. Đưa ra các ý tưởng cũng như cải thiện sản phẩm dự án , tối ưu nhất đối với các hệ thống cũng như luồng công việc thuận tiện cho các bộ phận khác như Sale, CS, ban quản lý , ban giám đốc có thể theo dõi sát sao công việc cũng như hệ thống của khách hàng."
                            },
                            quanLy: {
                                title: "Quản lý",
                                info: "Tư vấn hộ trợ và quản lý các đội nhóm lập trình giúp các doanh nghiệp vừa và nhỏ có cái nhìn tổng quan về công việc cũng như tránh hao hụt dòng tiền khi quản lý và xây dựng."
                            }
                        }
                    },


                    resume: {
                        title: "Bảng tóm tắt",
                        education: "Trình độ học vấn",
                        daiHocBachKhoa: "Đại học Bách Khoa HCM",//Ho Chi Minh City University of Technology
                        caoDangCaoThang: "Cao đẳng Kỹ Thuật Cao Thắng",
                        coding: "Lập trình",
                        codeManager: "Quản lý Code",
                        codeEditor: "Phần mềm Code",
                        test: "Kiểm thử",
                        congNghe: "Công nghệ",
                        dataBase: "Hệ cơ sở dữ liệu",
                        heDieuHanh: "Hệ điều hành",
                        thietKe: "Thiết kế",
                        soft: "Kỹ năng mềm",
                        kienThuc: "Kiến thức",

                        khoaHocMayTinh: {
                            title: "Khoa học máy tính",
                            info: "Chuyên ngành phần mềm. Với các chương trình đào tạo như lập trình với các ngôn ngữ như JavaScript (Nodejs), C# (.NetCore), Python, Golang; Cơ sở dữ liệu (SQL Server, MySQL, MongoDB, ...), Hệ điều hành (Linux, Window), Công nghệ phần mềm, Mạng máy tính."
                        },
                        congNghePhanMem: {
                            title: "Công nghệ phần mềm",
                            info: "Chuyên ngành lập trình Website. Với các chương trình đào tạo như lập trình với các ngôn ngữ như C/C++ (Cơ bản), C# (Window Application, Webform), PHP (Website cơ bản); Cơ sở dữ liệu (SQL Server, MySQL)."
                        },

                        kinhNghiem: {
                            title: "Kinh nghiệm",
                            vihat: {
                                jobTitle: "Fullstack Developer",
                                part1: "Tối ưu và xây dựng các tính năng mới cho hệ thống tin nhắn eSMS.",
                                part2: "Tái cấu trúc Website giới thiệu sản phẩm công ty.",
                                part3: "Xây dựng thêm các chức năng mới cho hệ thống nhắn tin trúng giải.",
                                part4: "Xây dựng giao diện quản lý thông tin chương trình trúng thưởng của tập đoàn Tân Hiệp Phát (.NET, ReactJS, ....)",
                                part5: "Bảo trì và nâng cấp hệ thống TOPUP với khả năng chịu tải cao. Áp dụng công nghệ mới như ReactJS, Electron, .... để xây dựng ứng dụng quản lý theo dõi hệ thống. Xây dựng hệ thống dùng để test tránh ảnh hưởng hệ thống thật.",
                                part6: "Phối hợp và hỗ trợ giải quyết các vấn đề về hệ thống cho các phòng ban chăm sóc khách hàng, nhà cung cấp , khách hàng.",
                                part7: "Nghiên cứu hệ thống DataWareHouse.",
                                part8: "Trainning nhân viên mới.",
                                part9: "Quản lý cơ sở dữ liệu MSSQL.",
                                part10: "Quản lý cơ sở dữ liệu MongoDB.",
                            },
                            dirox: {
                                jobTitle: "Software Engineer",
                                part1: "Lập trình back-end cho hệ thống API của game Stocket (Mobile shopping game).",
                                part2: "Xây dựng trang quản lý bằng Angular 2.",
                                part3: "Học về công nghệ mới NodeJS (Các Framework như Loopback, Express)",
                                part4: "Công ty có 4 chi nhánh tại Việt Nam, Pháp, HongKong, Nhật Bản.",
                            },
                            ryomo: {
                                jobTitle: "Thực tập sinh (Vị trí Web Developer)",
                                part1: "Tìm hiểu ASP.NET MVC5 và MongoDB.",
                                part2: "Cách thiết lập và thực hiện Project.",
                                part3: "Xây dựng hệ thống Website Quản lý thông tin nội bộ công ty RVSC.",
                            }
                        }
                    },


                    //#region Hoạt động
                    "Góc làm việc công ty VIHAT": "Góc làm việc công ty VIHAT",
                    "Tham dự các chương trình quay thưởng , GiveAway của công ty và ban lãnh đạo VIHAT": "Tham dự các chương trình quay thưởng , GiveAway của công ty và ban lãnh đạo VIHAT",
                    "Trang trí công ty VIHAT các dịp đặc biệt": "Trang trí công ty VIHAT các dịp đặc biệt",
                    "Biểu diễn đêm hội vui chơi ở VIHAT": "Biểu diễn đêm hội vui chơi ở VIHAT",
                    "Tham gia các hoạt động ngoài trời của công ty VIHAT": "Tham gia các hoạt động ngoài trời của công ty VIHAT",
                    "Company Trip của công ty VIHAT 1": "Company Trip của công ty VIHAT 1",
                    "Company Trip của công ty VIHAT 2": "Company Trip của công ty VIHAT 2",
                    "Company Trip của công ty VIHAT 3": "Company Trip của công ty VIHAT 3",
                    "Company Trip của công ty VIHAT 4": "Company Trip của công ty VIHAT 4",
                    "Company Trip của công ty VIHAT 5": "Company Trip của công ty VIHAT 5",
                    "Company Trip của công ty VIHAT 6": "Company Trip của công ty VIHAT 6",
                    "Company Trip của công ty VIHAT 7": "Company Trip của công ty VIHAT 7",
                    "Company Trip của công ty VIHAT 8": "Company Trip của công ty VIHAT 8",
                    "Company Trip của công ty VIHAT 9": "Company Trip của công ty VIHAT 9",
                    "Company Trip của công ty VIHAT 10": "Company Trip của công ty VIHAT 10",
                    "Company Trip của công ty VIHAT 11": "Company Trip của công ty VIHAT 11",
                    "Company Trip của công ty VIHAT 12": "Company Trip của công ty VIHAT 12",
                    "Company Trip của công ty VIHAT 13": "Company Trip của công ty VIHAT 13",
                    "Company Trip của công ty VIHAT 14": "Company Trip của công ty VIHAT 14",
                    "Company Trip của công ty VIHAT 16": "Company Trip của công ty VIHAT 16",
                    "Company Trip của công ty VIHAT 17": "Company Trip của công ty VIHAT 17",
                    "Company Trip của công ty VIHAT 18": "Company Trip của công ty VIHAT 18",
                    "Company Trip của công ty VIHAT 19": "Company Trip của công ty VIHAT 19",
                    "Company Trip của công ty VIHAT 20": "Company Trip của công ty VIHAT 20",
                    "Company Trip của công ty VIHAT 21": "Company Trip của công ty VIHAT 21",
                    "Company Trip của công ty VIHAT 22": "Company Trip của công ty VIHAT 22",
                    "Hoạt động đội nhóm công ty VIHAT": "Hoạt động đội nhóm công ty VIHAT",
                    "Tham gia lễ cưới quản lý cùng người yêu ở công ty VIHAT": "Tham gia lễ cưới quản lý cùng người yêu ở công ty VIHAT",
                    "Tham gia Party cuối năm ở công ty VIHAT 1": "Tham gia Party cuối năm ở công ty VIHAT 1",
                    "Tham gia Party cuối năm ở công ty VIHAT 2": "Tham gia Party cuối năm ở công ty VIHAT 2",
                    "Work From Home khi dịch Covid ập tới": "Work From Home khi dịch Covid ập tới",
                    "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 1": "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 1",
                    "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 2": "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 2",
                    "Công ty tổ chức chúc mừng sinh nhật cho nhân viên và kèm theo quà chúc sinh nhật (Chuyển khoản)": "Công ty tổ chức chúc mừng sinh nhật cho nhân viên và kèm theo quà chúc sinh nhật (Chuyển khoản)",
                    "Ban lãnh đạo và giám đốc gọi điện chúc mừng sinh nhật cho nhân viên": "Ban lãnh đạo và giám đốc gọi điện chúc mừng sinh nhật cho nhân viên",
                    "Bộ test Covid công ty VIHAT gửi trước khi lên công ty chính thức": "Bộ test Covid công ty VIHAT gửi trước khi lên công ty chính thức",
                    "Hệ thống website TOPUP": "Hệ thống website TOPUP",
                    "Hệ thống tin nhắn eSMS": "Hệ thống tin nhắn eSMS",
                    "Phần mềm quản lý TOPUP (Electron+ReactJS)": "Phần mềm quản lý TOPUP (Electron+ReactJS)",
                    "Biểu diễn văn nghệ": "Biểu diễn văn nghệ",
                    "Tập trung nghe thông báo từ giám đốc": "Tập trung nghe thông báo từ giám đốc",
                    "Góc làm việc ở công ty": "Góc làm việc ở công ty",
                    "Các đồng nghiệp nước ngoài": "Các đồng nghiệp nước ngoài",
                    "Giấy chứng nhận thực tập ở công ty": "Giấy chứng nhận thực tập ở công ty",
                    "Ảnh công ty": "Ảnh công ty",
                    "Nhóm thực tập công ty Ryomo": "Nhóm thực tập công ty Ryomo",
                    "Giải thưởng đầu tay :))": "Giải thưởng đầu tay :))",
                    "Tham quan công ty DEK Technologies 1": "Tham quan công ty DEK Technologies 1",
                    "Tham quan công ty DEK Technologies 2": "Tham quan công ty DEK Technologies 2",
                    "Tham quan công ty DEK Technologies 3": "Tham quan công ty DEK Technologies 3",
                    "Tham quan công ty DEK Technologies 4": "Tham quan công ty DEK Technologies 4",
                    "Tham quan công ty DEK Technologies 5": "Tham quan công ty DEK Technologies 5",
                    "Tham gia các hoạt động của trường": "Tham gia các hoạt động của trường",
                    "Lớp học": "Lớp học",
                    "Lớp học": "Lớp học",
                    "Giao lưu guitar ở công viên": "Giao lưu guitar ở công viên",
                    "Giao lưu ban nhạc": "Giao lưu ban nhạc",
                    "Game giải trí": "Game giải trí",
                    "Game giải trí": "Game giải trí",
                    //#endregion


                    blog: {
                        alert: "Chức năng sẽ sớm ra mắt"
                    },
                    
                    contact: {
                        title: "Liên hệ",
                        howCanI: "Làm sao tôi có thể",
                        helpYou: "giúp bạn?",
                        fullName: "Họ và tên",
                        email: "Địa chỉ Email",
                        subject: "Tiêu đề",
                        message: "Nội dung",
                        sendMessage: "Gửi tin nhắn"
                    }
                }
            },
            en: {
                translation: {
                    menu: {
                        home: "Home",
                        about: "About Me",
                        resume: "Resume",
                        portfolio: "Portfolio",
                        blog: "Blog",
                        contact: "Contact"
                    },

                    'downloadCV': "Download CV",
                    about: {
                        pageTitle: {
                            about: "About",
                            me: "Me"
                        },
                        aboutMe: {
                            part1: `This is a job I have always been passionate about and want to pursue, as a skilled programmer, I am always striving and trying to develop my professional skills, and always want to learn new things as well as specialize in Web programming skills.`,
                            part2: "The spirit of teamwork in the industry is very important, you cannot complete a project well without openness in work. Responsibility and passion for the profession will show in each project as well as the way you work.",
                            part3: "No one is perfect, so we will need to work every day to get what we want."
                        },
                        information: {
                            title: {
                                tuoi: "Age",
                                noiCuTru: "Residence",
                                diaChi: "Address",
                                soDienThoai: "Phone"
                            }
                        },
                        whatIdo: {
                            title: {
                                what: "What",
                                iDo: "I Do"
                            },

                            web: {
                                info: "Create and build website systems with high security requirements and fast speed based on modern technologies such as NodeJS, .NetCore, .NET, RabbitMQ, Kafka, Docker, Redis, .... Along with that, databases like MSSQL, MongoDB, Elasticsearch. Use many different languages to optimize the system such as Javascript, C#, Python, Golang, ..."
                            },
                            thuongMaiDienTu: {
                                title: "Ecommerce",
                                info: "Experience in building, structuring and optimizing large and small e-commerce systems based on different technologies."
                            },
                            sangTaoNoiDung: {
                                title: "Content Creation",
                                info: "Build software, APIs and support tools according to customer requirements. Manage fanpage, enter data, collect website data, make functional tools for Chrome according to customer's request. Giving ideas as well as improving project products, optimizing systems as well as convenient workflows for other departments such as Sales, CS, management, and board of directors can follow Closely follow the work as well as the customer's system."
                            },
                            quanLy: {
                                title: "Manage",
                                info: "Consulting, support and management of programming teams helps small and medium enterprises have an overview of the work as well as avoid loss of cash flow when managing and building."
                            }
                        }
                    },


                    resume: {
                        title: "Resume",
                        education: "Education",
                        daiHocBachKhoa: "Ho Chi Minh City University of Technology",
                        caoDangCaoThang: "Cao Thang Technical College",
                        coding: "Coding",
                        codeManager: "Code Manager",
                        codeEditor: "Code Editer",
                        test: "Test",
                        congNghe: "Technology",
                        dataBase: "Database",
                        heDieuHanh: "OS",
                        thietKe: "Design",
                        soft: "Soft",
                        kienThuc: "Knowledges",


                        khoaHocMayTinh: {
                            title: "Computer science",
                            info: "Software specialization. With training programs such as programming with languages such as JavaScript (Nodejs), C# (.NetCore), Python, Golang; Database (SQL Server, MySQL, MongoDB, ...), Operating System (Linux, Window), Software Engineering, Computer Network."
                        },
                        congNghePhanMem: {
                            title: "Software technology",
                            info: "Specializing in Website Programming. With training programs such as programming with languages such as C/C++ (Basic), C# (Window Application, Webform), PHP (Basic Website); Database (SQL Server, MySQL)."
                        },

                        kinhNghiem: {
                            title: "Experience",
                            vihat: {
                                jobTitle: "Fullstack Developer",
                                part1: "Optimizing and building new features for the eSMS messaging system.",
                                part2: "Website restructuring to introduce company products.",
                                part3: "Build more new functions for the winning messaging system.",
                                part4: "Building an information management interface for the winning program of Tan Hiep Phat Corporation (.NET, ReactJS, ....)",
                                part5: "Maintain and upgrade TOPUP system with high load capacity. Apply new technologies such as ReactJS, Electron, .... to build a monitoring system management application. Build a system for testing to avoid affecting the real system.",
                                part6: "Coordinate and support to solve system problems for customer care departments, suppliers and customers.",
                                part7: "Study the DataWareHouse system.",
                                part8: "Training new employees.",
                                part9: "MSSQL database management.",
                                part10: "Manage MongoDB databases.",
                            },
                            dirox: {
                                jobTitle: "Software Engineer",
                                part1: "Back-end programming for the Stocket game API system (Mobile shopping game).",
                                part2: "Build management page using Angular 2.",
                                part3: "Learn about new technology NodeJS (Frameworks like Loopback, Express).",
                                part4: "The company has 4 branches in Vietnam, France, Hong Kong, Japan.",
                            },
                            ryomo: {
                                jobTitle: "Intern (Web Developer Position)",
                                part1: "Learn ASP.NET MVC5 and MongoDB.",
                                part2: "How to set up and execute Project.",
                                part3: "Building the Website system to manage internal information of RVSC company.",
                            }
                        }
                    },

                    //#region Hoạt động
                    "Góc làm việc công ty VIHAT": "Working corner of VIHAT company",
                    "Tham dự các chương trình quay thưởng , GiveAway của công ty và ban lãnh đạo VIHAT": "Participate in prize draws, GiveAway of the company and VIHAT's leadership",
                    "Trang trí công ty VIHAT các dịp đặc biệt": "Decorate VIHAT company for special occasions",
                    "Biểu diễn đêm hội vui chơi ở VIHAT": "Performing a fun night at VIHAT",
                    "Tham gia các hoạt động ngoài trời của công ty VIHAT": "Join VIHAT's outdoor activities",
                    "Company Trip của công ty VIHAT 1": "Company Trip of VIHAT 1 company",
                    "Company Trip của công ty VIHAT 2": "Company Trip of VIHAT 2",
                    "Company Trip của công ty VIHAT 3": "Company Trip of VIHAT 3",
                    "Company Trip của công ty VIHAT 4": "Company Trip of VIHAT 4",
                    "Company Trip của công ty VIHAT 5": "Company Trip of VIHAT 5 company",
                    "Company Trip của công ty VIHAT 6": "Company Trip of VIHAT 6",
                    "Company Trip của công ty VIHAT 7": "Company Trip of VIHAT 7 company",
                    "Company Trip của công ty VIHAT 8": "Company Trip of VIHAT 8 company",
                    "Company Trip của công ty VIHAT 9": "Company Trip of VIHAT 9 company",
                    "Company Trip của công ty VIHAT 10": "Company Trip of VIHAT 10 company",
                    "Company Trip của công ty VIHAT 11": "Company Trip of VIHAT 11 company",
                    "Company Trip của công ty VIHAT 12": "Company Trip of VIHAT 12",
                    "Company Trip của công ty VIHAT 13": "Company Trip of VIHAT 13",
                    "Company Trip của công ty VIHAT 14": "Company Trip of VIHAT 14",
                    "Company Trip của công ty VIHAT 16": "Company Trip of VIHAT 16",
                    "Company Trip của công ty VIHAT 17": "Company Trip of VIHAT 17",
                    "Company Trip của công ty VIHAT 18": "Company Trip of VIHAT 18",
                    "Company Trip của công ty VIHAT 19": "Company Trip of VIHAT 19",
                    "Company Trip của công ty VIHAT 20": "Company Trip of VIHAT 20",
                    "Company Trip của công ty VIHAT 21": "Company Trip of VIHAT 21",
                    "Company Trip của công ty VIHAT 22": "Company Trip of VIHAT 22",
                    "Hoạt động đội nhóm công ty VIHAT": "Group activities of VIHAT company",
                    "Tham gia lễ cưới quản lý cùng người yêu ở công ty VIHAT": "Participating in the wedding ceremony of the manager with her lover at VIHAT company",
                    "Tham gia Party cuối năm ở công ty VIHAT 1": "Join the year-end party at VIHAT 1 company",
                    "Tham gia Party cuối năm ở công ty VIHAT 2": "Join the year-end party at VIHAT 2 company",
                    "Work From Home khi dịch Covid ập tới": "Work From Home when the Covid epidemic hit",
                    "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 1": "Working again at VIHAT's corporate office after the 2021 epidemic on October 1",
                    "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 2": "Working again at VIHAT's corporate office after the 2021 epidemic on October 2",
                    "Công ty tổ chức chúc mừng sinh nhật cho nhân viên và kèm theo quà chúc sinh nhật (Chuyển khoản)": "The company celebrates birthdays for employees and includes birthday gifts (Bank transfer)",
                    "Ban lãnh đạo và giám đốc gọi điện chúc mừng sinh nhật cho nhân viên": "Board of management and director called to wish employees happy birthday",
                    "Bộ test Covid công ty VIHAT gửi trước khi lên công ty chính thức": "Covid test kit sent by VIHAT company before going to the official company",
                    "Hệ thống website TOPUP": "TOPUP website system",
                    "Hệ thống tin nhắn eSMS": "eSMS Messaging System",
                    "Phần mềm quản lý TOPUP (Electron+ReactJS)": "TOPUP management software (Electron+ReactJS)",
                    "Biểu diễn văn nghệ": "Cultural performance",
                    "Tập trung nghe thông báo từ giám đốc": "Focus on listening to announcements from the director",
                    "Góc làm việc ở công ty": "Working corner at the company",
                    "Các đồng nghiệp nước ngoài": "Foreign Colleagues",
                    "Giấy chứng nhận thực tập ở công ty": "Certificate of Internship at the Company",
                    "Ảnh công ty": "Company photo",
                    "Nhóm thực tập công ty Ryomo": "Ryomo Corporate Intern Group",
                    "Giải thưởng đầu tay :))": "First Prize :))",
                    "Tham quan công ty DEK Technologies 1": "Visit DEK Technologies 1 company",
                    "Tham quan công ty DEK Technologies 2": "Visit DEK Technologies 2",
                    "Tham quan công ty DEK Technologies 3": "Visit DEK Technologies 3 company",
                    "Tham quan công ty DEK Technologies 4": "Visit DEK Technologies 4 company",
                    "Tham quan công ty DEK Technologies 5": "Visit DEK Technologies 5 company",
                    "Tham gia các hoạt động của trường": "Participate in school activities",
                    "Lớp học": "Class",
                    "Lớp học": "Class",
                    "Giao lưu guitar ở công viên": "Guitar exchange in the park",
                    "Giao lưu ban nhạc": "Band Exchange",
                    "Game giải trí": "Entertainment games",
                    "Game giải trí": "Entertainment games",
                    //#endregion

                    blog: {
                        alert: "Coming soon ...."
                    },

                    contact: {
                        title: "Contact",
                        howCanI: "How Can I",
                        helpYou: "Help you?",
                        fullName: "Full Name",
                        email: "Email Address",
                        subject: "Subject",
                        message: "Message",
                        sendMessage: "Send message"
                    }
                }
            },

        }
    });

export default i18n;