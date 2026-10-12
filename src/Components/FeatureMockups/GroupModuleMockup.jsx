import FeatureMockupFrame from "./FeatureMockupFrame";



const ROLE_ROWS = [

    { code: "sm", name: "md", desc: "lg", n1: "xs", n2: "xs" },

    { code: "md", name: "lg", desc: "md", n1: "xs", n2: "sm" },

    { code: "sm", name: "md", desc: "lg", n1: "xs", n2: "xs" },

    { code: "lg", name: "sm", desc: "md", n1: "sm", n2: "xs" },

    { code: "sm", name: "md", desc: "sm", n1: "xs", n2: "xs" },

    { code: "md", name: "md", desc: "lg", n1: "xs", n2: "xs" },

    { code: "sm", name: "lg", desc: "md", n1: "xs", n2: "sm" },

];



function GroupModuleMockup() {



    return (



        <FeatureMockupFrame active={3}>



            <div className="fm-roles">



                <div className="fm-page-title">

                Role Module

                </div>





                <div className="fm-roles-table-wrap">



                    <div className="fm-roles-toolbar">



                        <div className="fm-roles-toolbar-search">



                            <span className="fm-roles-search-icon">

                                ⌕

                            </span>



                            <span className="fm-input-placeholder" />



                        </div>





                        <div className="fm-roles-toolbar-actions">



                            <span className="fm-roles-tool-btn">

                                +

                            </span>



                            <span className="fm-roles-tool-btn fm-roles-tool-grid" />



                            <span className="fm-roles-tool-btn fm-roles-tool-menu" />



                        </div>



                    </div>





                    <div className="fm-roles-table fm-table">



                        <div className="fm-table-header fm-roles-cols-header">



                            <span className="fm-table-cell">

                                <span className="fm-check empty" />

                            </span>



                            <span className="fm-table-cell">

                                <span className="fm-header-skeleton sm fm-roles-col-bar" />

                            </span>



                            <span className="fm-table-cell">

                                <span className="fm-header-skeleton sm fm-roles-col-bar" />

                            </span>



                            <span className="fm-table-cell">

                                <span className="fm-header-skeleton md fm-roles-col-bar" />

                            </span>



                            <span className="fm-table-cell">

                                <span className="fm-header-skeleton xs fm-roles-col-bar" />

                            </span>



                            <span className="fm-table-cell">

                                <span className="fm-header-skeleton xs fm-roles-col-bar" />

                            </span>



                            <span className="fm-table-cell">

                                <span className="fm-header-skeleton xs fm-roles-col-bar" />

                            </span>



                        </div>





                        {ROLE_ROWS.map((row, index) => (



                            <div

                                className="fm-table-row"

                                key={index}

                            >



                                <span className="fm-table-cell">

                                    <span className="fm-check empty" />

                                </span>



                                <span className="fm-table-cell">

                                    <span

                                        className={`fm-skeleton ${row.code}`}

                                    />

                                </span>



                                <span className="fm-table-cell">

                                    <span

                                        className={`fm-skeleton ${row.name}`}

                                    />

                                </span>



                                <span className="fm-table-cell">

                                    <span

                                        className={`fm-skeleton ${row.desc}`}

                                    />

                                </span>



                                <span className="fm-table-cell">

                                    <span

                                        className={`fm-skeleton ${row.n1}`}

                                    />

                                </span>



                                <span className="fm-table-cell">

                                    <span

                                        className={`fm-skeleton ${row.n2}`}

                                    />

                                </span>



                                <span className="fm-table-cell">



                                    <span className="fm-roles-actions">



                                        <span className="fm-roles-action-icon edit" />

                                        <span className="fm-roles-action-icon delete" />

                                        <span className="fm-roles-action-icon assign" />



                                    </span>



                                </span>



                            </div>



                        ))}



                    </div>





                    <div className="fm-roles-pagination">



                        <div className="fm-roles-pagination-left">



                            <span className="fm-skeleton md" />

                            <span className="fm-skeleton sm" />

                            <span className="fm-skeleton lg" />



                        </div>





                        <div className="fm-roles-pagination-nav">



                            {[1, 2, 3, 4].map((item) => (



                                <span

                                    className="fm-roles-page-nav-btn"

                                    key={item}

                                />



                            ))}



                        </div>



                    </div>



                </div>





                <div className="fm-roles-page-footer">



                    <span className="fm-skeleton sm" />

                    <span className="fm-skeleton xs" />



                </div>



            </div>



        </FeatureMockupFrame>



    );

}



export default GroupModuleMockup;

