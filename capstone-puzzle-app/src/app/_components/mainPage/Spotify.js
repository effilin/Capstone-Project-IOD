

export default function Spotify() {

    return(
    <div id="spotify">
        <div className="container music">
            <div className="row" id="spotify">
                <div className="col">
                    <button className="carousel-control-prev arrows" type="button" data-bs-target="#carouselMusic" data-bs-slide="prev" style={{position:'relative', width:'100%', height: '100%'}}>
                        <span className="carousel-control-prev-icon" aria-hidden="false" ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                </div>
                <div className="col col-lg-8">
                    <div id="carouselMusic" className="carousel slide ">
                        <div className="carousel-inner" style={{marginTop:'3%'}}>
                            <div className="carousel-item active">
                                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/25nzKGDiua1lE9Qo5V19GL?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/7trx783SvnHhKkmgSSTIFJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/1bx7OUl2UmAnA5oZkm9If7?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/4fXGWiVhlOLdhwRDP6pIFG?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                            <div className="carousel-item">
                                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/3e0yTP5trHBBVvV32jwXqF?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col col-lg-2"> 
                    <button className="carousel-control-next arrows " type="button" data-bs-target="#carouselMusic" data-bs-slide="next" style={{position:'relative', width:'100%', height: '100%'}}>
                        <span className="carousel-control-next-icon" aria-hidden="false"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>          

    )
}