export default function ProjectCard({ name, description, imageURL, company }) {
    return (
        <>
            <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div class="card-body p-0">
                    <div class="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                        <div class="p-5">
                            <h2 class="fw-bolder">{name}</h2>
                            <p>{description}</p>

                            <h6 className="mb-0"><strong>Empresa</strong></h6>
                            <p>{company}</p>
                        </div>
                        <img class="img-fluid" src={imageURL} alt="..." width={300} />
                    </div>
                </div>
            </div>
        </>
    );
}