import FeatureMockupFrame from "./FeatureMockupFrame";

function GroupModuleMockup() {

    const groups = [
        "lg",
        "md",
        "sm",
        "lg",
    ];

    const rows = [
        ["md", true, true, true, true],
        ["sm", true, true, false, true],
        ["lg", true, true, true, true],
        ["md", true, true, true, false],
        ["sm", true, true, false, true],
        ["lg", true, true, true, true],
        ["md", true, true, true, true],
    ];

    return (

        <FeatureMockupFrame active={3}>

            <div className="fm-page-title">
                Edit Group
            </div>

            <div className="fm-page-description">
                Configure role-based access and permissions.
            </div>


            <div className="fm-group-layout">

                {/* Groups */}

                <div className="fm-group-list">

                    <div className="fm-group-title">

                        <span className="fm-skeleton sm" />

                    </div>


                    {groups.map((size, index) => (

                        <div
                            className={`fm-group-item ${
                                index === 0
                                    ? "active"
                                    : ""
                            }`}
                            key={index}
                        >

                            <span
                                className={`fm-skeleton ${size}`}
                            />

                        </div>

                    ))}

                </div>


                {/* Permissions */}

                <div className="fm-permission-table">

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


                            {row.slice(1).map(
                                (checked, column) => (

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
                                            {checked
                                                ? "✓"
                                                : ""}
                                        </span>

                                    </span>

                                )
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </FeatureMockupFrame>

    );
}

export default GroupModuleMockup;