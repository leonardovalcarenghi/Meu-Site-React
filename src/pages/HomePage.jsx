export default function HomePage() {
    return (
        <>
            {/* <!-- Header--> */}
            <header class="py-5">
                <div class="container px-5 pb-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-xxl-5">
                            {/* <!-- Header text content--> */}
                            <div class="text-center text-xxl-start">
                                <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                                    <div class="text-uppercase">BackEnd &middot; FrontEnd &middot; DataBase</div>
                                </div>
                                <div class="fs-3 fw-light text-muted">Leonardo Valcarenghi</div>
                                <h1 class="display-3 fw-bolder mb-5">
                                    <span class="text-gradient d-inline">Desenvolvedor Full Stack</span>
                                </h1>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="#/experiencia">Experiência</a>
                                    <a class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="#/projetos">Projetos</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-7">
                            {/* <!-- Header profile picture--> */}
                            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div class="profile bg-white">
                                    {/* <img class="profile-img" src="assets/profile.png" alt="..." /> */}
                                    <div class="dots-1">

                                    </div>
                                    <div class="dots-2">

                                    </div>
                                    <div class="dots-3">

                                    </div>
                                    <div class="dots-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>




            {/* <!-- About Section--> */}
            <section class="bg-light py-5">
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-xxl-8">
                            <div class="text-center my-5">
                                <h2 class="display-5 fw-bolder">
                                    <span class="text-gradient d-inline">Sobre Mim</span>
                                </h2>
                                <p class="lead fw-light mb-4">Me chamo Leonardo e sou Desenvolvedor Full Stack .NET.</p>
                                <p class="text-muted">
                                    Busco sempre estar a par das novidades e elaborar layouts e interfaces seguindo conceitos modernos e avançados,
                                    focadas na usabilidade e no design emocional.
                                </p>
                                <div class="d-flex justify-content-center fs-2 gap-4">
                                    <a class="text-gradient" href="https://www.instagram.com/leo_valcarenghi/" target="_blank">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                    <a class="text-gradient" href="https://www.linkedin.com/in/leonardo-valcarenghi/" target="_blank">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                    <a class="text-gradient" href="https://github.com/leonardovalcarenghi" target="_blank">
                                        <i class="bi bi-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}