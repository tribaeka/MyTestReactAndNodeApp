import React from "react";


export default function SingleJobSideBar({company, companyLogo, companyUrl, howToApply}) {

    return (
        <div className="col-4">
            <div className="row p-2 mb-4 outer-company-to">
                <div className="col-12 inner-company-to">
                    <h5 className="pt-2">{company}</h5>
                    <hr/>
                    <img className="mx-4"
                         src={companyLogo}
                         width={280}
                         height={100} alt="Company logo"/>
                    <hr/>
                    <p>
                        <a href={companyUrl}>
                            {companyUrl}
                        </a>
                    </p>
                </div>
            </div>
            <div className="row p-2 outer-how-to">
                <div className="col-12 inner-how-to">
                    <h5 className="pt-2">How to apply</h5>
                    <hr/>
                    <div dangerouslySetInnerHTML={{__html: howToApply}}/>
                </div>
            </div>
        </div>
    )
}
