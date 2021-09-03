function Collapsecard(header,content) {
    return (
        <div class="card shadow mb-4">
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
                role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 class="m-0 font-weight-bold text-primary">{header}</h6>
            </a>
            <div class="collapse show" id="collapseCardExample">
                <div class="card-body">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Collapsecard