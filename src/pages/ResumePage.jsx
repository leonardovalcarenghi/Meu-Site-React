import ExperienceCard from "../components/template/ExperienceCard";
import Skillset from "../components/template/Skillset";

export default function ResumePage() {
    return (
        <>
            {/* <!-- Page Content--> */}
            <div class="container-fluid px-5 my-5">
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Experiência Profissional</span></h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        {/* <!-- Experience Section--> */}
                        <section>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h2 class="text-primary fw-bolder mb-0">Histórico Profissional</h2>
                                {/* <!-- Download resume button--> */}
                                {/* <!-- Note: Set the link href target to a PDF file within your project--> */}
                                {/* <a class="btn btn-primary px-4 py-3" href="#!">
                                    <div class="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a> */}
                            </div>

                            {/* Auvo Tecnologia */}
                            <ExperienceCard year="Outubro de 2022 - Atualmente" job="Desenvolvedor Full Stack .NET Pleno" company="Auvo Tecnologia" location="Remoto">

                                <ul>
                                    <li>Realizar manutenção e melhorias em software proprietário da empresa.</li>
                                </ul>

                                <h6>
                                    <span class="badge bg-secondary m-1">.NET</span>
                                    <span class="badge bg-secondary m-1">.NET Framework</span>
                                    <span class="badge bg-secondary m-1">C#</span>
                                    <span class="badge bg-secondary m-1">MySQL</span>
                                    <span class="badge bg-secondary m-1">HTML</span>
                                    <span class="badge bg-secondary m-1">CSS</span>
                                    <span class="badge bg-secondary m-1">JavaScript</span>
                                    <span class="badge bg-secondary m-1">JWT</span>
                                    <span class="badge bg-secondary m-1">Entity Framework</span>
                                    <span class="badge bg-secondary m-1">AutoMapper</span>
                                    <span class="badge bg-secondary m-1">S.O.L.I.D</span>
                                </h6>

                            </ExperienceCard>

                            {/* Safeweb */}
                            <ExperienceCard year="Julho de 2019 - Outubro de 2022" job="Desenvolvedor Full Stack .NET Pleno" company="Safeweb Segurança da Informação" location="Porto Alegre - RS">


                                <ul>
                                    <li>Desenvolver, testar e implantar os requisitos funcionais e não funcionais dos sistemas;</li>
                                    <li>Elaborar e orientar as atividades de correção e manutenção dos sistemas legados;</li>
                                    <li>Planejar a arquitetura dos novos projetos;</li>
                                    <li>Planejar e executar a implantação de novas versões dos sistemas;</li>
                                    <li>Contribuir nas etapas de planejamento e levantamento de requisitos dos projetos e demandas;</li>
                                    <li>Levantar, analisar, antecipar e mitigar problemas e riscos dos sistemas desenvolvidos;</li>
                                    <li>Atuar na resolução de problemas e esclarecimento de dúvidas junto às demais áreas da empresa;</li>
                                </ul>

                                <h6>
                                    <span class="badge bg-secondary m-1">.NET</span>
                                    <span class="badge bg-secondary m-1">.NET Framework</span>
                                    <span class="badge bg-secondary m-1">C#</span>
                                    <span class="badge bg-secondary m-1">SQL Server</span>
                                    <span class="badge bg-secondary m-1">HTML</span>
                                    <span class="badge bg-secondary m-1">CSS</span>
                                    <span class="badge bg-secondary m-1">JavaScript</span>
                                    <span class="badge bg-secondary m-1">ReactJS</span>
                                </h6>

                            </ExperienceCard>


                            {/* StudioCoder */}
                            <ExperienceCard year="Outubro de 2018 - Abril de 2019" job="Estagiário de Desenvolvimento" company="Studio Coder" location="Porto Alegre - RS">


                                <ul>
                                    <li>Desenvolver, testar e implementar novas funcionalidades ao sistema.</li>
                                    <li>Planejamento de layout e interfaces.</li>
                                </ul>

                                <h6>                    
                                    <span class="badge bg-secondary m-1">HTML</span>
                                    <span class="badge bg-secondary m-1">CSS</span>
                                    <span class="badge bg-secondary m-1">JavaScript</span>
                                    <span class="badge bg-secondary m-1">JSON</span>
                                    <span class="badge bg-secondary m-1">GIT</span>
                                </h6>

                            </ExperienceCard>

                        </section>

                        {/* <!-- Education Section--> */}
                        {/* <section>
                            <h2 class="text-secondary fw-bolder mb-4">Education</h2>
             
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2">2015 - 2017</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder">Barnett College</div>
                                                    <div class="small text-muted">Fairfield, NY</div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted">Master's</div>
                                                    <div class="small text-muted">Web Development</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div>

                      
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-secondary fw-bolder mb-2">2011 - 2015</div>
                                                <div class="mb-2">
                                                    <div class="small fw-bolder">ULA</div>
                                                    <div class="small text-muted">Los Angeles, CA</div>
                                                </div>
                                                <div class="fst-italic">
                                                    <div class="small text-muted">Undergraduate</div>
                                                    <div class="small text-muted">Computer Science</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        {/* <!-- Divider--> */}
                        <div class="pb-5"></div>


                        {/* <!-- Skills Section--> */}
                        <section>
                            {/* <!-- Skillset Card--> */}
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">

                                    {/* <!-- Habilidades Profissionais--> */}
                                    <div class="mb-5">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Habilidades Profissionais</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <Skillset text={"Desenvolvimento Web"} />
                                            <Skillset text={"Métodologia Ágil (SCRUM)"} />
                                            <Skillset text={"Azure DevOps"} />
                                        </div>
                                    </div>

                                    {/* <!-- Frameworks (BackEnd)--> */}
                                    <div class="mb-0">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Frameworks <span className="small">[ BackEnd ]</span> </span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <Skillset text={".NET"} />
                                            <Skillset text={".NET Framework"} />
                                            <Skillset text={"Entity Framework"} />
                                            <Skillset text={"AutoMapper"} />
                                            <Skillset text={"NodeJS"} />
                                        </div>
                                    </div>

                                    {/* <!-- Frameworks (FrontEnd)--> */}
                                    <div class="mb-0">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Frameworks <span className="small">[ FrontEnd ]</span> </span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <Skillset text={"ReactJS"} />
                                            <Skillset text={"jQuery"} />
                                            <Skillset text={"Bootstrap"} />
                                            <Skillset text={"FontAwesome"} />
                                        </div>
                                    </div>

                                    {/* <!-- Linguagens de Programação--> */}
                                    <div class="mb-0">
                                        <div class="d-flex align-items-center mb-4">
                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Linguagens de Programação</span></h3>
                                        </div>
                                        <div class="row row-cols-1 row-cols-md-3 mb-4">
                                            <Skillset text={"HTML"} />
                                            <Skillset text={"CSS"} />
                                            <Skillset text={"JavaScript"} />
                                            <Skillset text={"C#"} />
                                            <Skillset text={"VisualBasic"} />
                                            <Skillset text={"SQL"} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </>
    );
}