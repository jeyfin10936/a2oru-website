import FeatureMockupFrame from "./FeatureMockupFrame";

function ModuleLevelSecurityMockup() {

    const rows = [
        ["lg", true, true, true, true],
        ["md", true, true, true, false],
        ["sm", true, true, false, true],
        ["lg", true, true, true, true],
        ["md", true, true, true, true],
        ["sm", true, true, false, true],
        ["lg", true, true, true, false],
        ["md", true, true, true, true],
    ];

    return (

        <FeatureMockupFrame active={4}>

            <div className="fm-page-title">
                Module-Level Security
            </div>

            <div className="fm-page-description">
                Configure module-level access permissions for each role.
            </div>


            <div className="fm-security-table fm-table">

                <div className="fm-table-header">

                    <span className="fm-header-skeleton sm" />
                    <span className="fm-header-skeleton xs" />
                    <span className="fm-header-skeleton xs" />
                    <span className="fm-header-skeleton xs" />
                    <span className="fm-header-skeleton xs" />

                </div>


                {rows.map((row, index) => (

                    <div
                        className="fm-table-row"
                        key={index}
                    >

                        <span className="fm-table-cell">

                            <span
                                className={`fm-skeleton ${row[0]}`}
                            />

                        </span>


                        {row.slice(1).map((checked, column) => (

                            <span
                                className="fm-table-cell"
                                key={column}
                            >

                                <span
                                    className={`fm-check ${
                                        checked
                                            ? ""
                                            : "empty"
                                    }`}
                                >
                                    {checked ? "✓" : ""}
                                </span>

                            </span>

                        ))}

                    </div>

                ))}

            </div>

        </FeatureMockupFrame>

    );
}

export default ModuleLevelSecurityMockup;