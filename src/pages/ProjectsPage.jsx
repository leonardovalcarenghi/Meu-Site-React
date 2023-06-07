import ProjectCard from "../components/template/ProjectCard";

import Logo_Auvo from "../assets/img/auvo.png";
import Logo_sDoc from "../assets/img/sdoc.png";
import Logo_Count from "../assets/img/count.jpg";

export default function ProjectsPage() {
    return (
        <>
            {/* <!-- Projects Section--> */}
            <section class="py-5">
                <div class="container px-5 mb-5">
                    <div class="text-center mb-5">
                        <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projetos</span></h1>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-11 col-xl-9 col-xxl-8">


                            {/* Auvo */}
                            <ProjectCard
                                name={"Auvo"}
                                description={"O Auvo é um software com o objetivo de ajudar empresas de manutenção e assistência técnica a serem mais produtivas."}
                                imageURL={Logo_Auvo}
                                company="Auvo Tecnologia"
                            />

                            {/* sDoc */}
                            <ProjectCard
                                name={"sDoc"}
                                description={"Solução para assinar documentos on-line, com validade jurídica e total segurança, garantidos pelo Certificado Digital padrão ICP-Brasil."}
                                imageURL={Logo_sDoc}
                                company="Safeweb - Segurança da Informação"
                            />

                            {/* BRDocs */}
                            {/* <ProjectCard
                                name={"BRDocs"}
                                description={"Portal de downloads de documentos assinados pelo sDoc."}
                                imageURL={"https://dummyimage.com/300x400/343a40/6c757d"}
                                company="Safeweb - Segurança da Informação"
                            /> */}

                            {/* XPEG Count */}
                            <ProjectCard
                                name={"XPEG Count"}
                                description={"Software gerenciador de despesas pessoais."}
                                imageURL={Logo_Count}
                                company="Projeto Próprio"
                            />


                           
                           
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Call to action section--> */}
            {/* <section class="py-5 bg-gradient-primary-to-secondary text-white">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
                    </div>
                </div>
            </section> */}
        </>
    );
}