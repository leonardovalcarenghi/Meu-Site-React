export default function ExperienceCard({
    year = "2023",
    job = "Developer",
    company = "Empresa",
    location,
    children
}) {
    return (
        <>
            <div class="card shadow border-0 rounded-4 mb-5">
                <div class="card-body p-5">
                    <div class="row align-items-center gx-5">
                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                            <div class="bg-light p-4 rounded-4">
                                <div class="text-primary fw-bolder mb-2">{year}</div>
                                <div class="small fw-bolder">{job}</div>
                                <div class="small text-muted">{company}</div>
                                <div class="small text-muted">{location}</div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}