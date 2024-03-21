/*
 * Copyright (C)  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useEffect, useState } from "react";

import { get } from "requests";
import * as data from "data";
import { ResponsivePie } from "@nivo/pie";

interface VoteSummaryData {
    report_type: string;
    total_consensus: number;
    total_non_consensus: number;
    total_escalated: number;
}

interface VoteSummaryPieProps {
    summary_data: VoteSummaryData;
}

const VoteSummaryPie = ({ summary_data }: VoteSummaryPieProps) => {
    const chart_data = React.useMemo(
        () => [
            { id: "consensus", value: summary_data["total_consensus"] },
            { id: "non-consensus", value: summary_data["total_non_consensus"] },
            { id: "escalated", value: summary_data["total_escalated"] },
        ],
        [summary_data],
    );

    const chart_theme =
        data.get("theme") === "light" // (Accessible theme TBD - this assumes accessible is dark for now)
            ? {
                  /* nivo defaults work well with our light theme */
              }
            : {
                  text: { fill: "#FFFFFF" },
                  tooltip: { container: { color: "#111111" } },
                  grid: { line: { stroke: "#444444" } },
              };

    return (
        <div className="vote-outcome-summary">
            <ResponsivePie
                data={chart_data}
                animate
                enableArcLabels={false}
                margin={{ top: 5, right: 100, bottom: 20, left: 100 }}
                theme={chart_theme}
            />
        </div>
    );
};

interface UserVoteActionSummaryProps {
    user_id: number;
}

const UserVoteActionSummary = ({ user_id }: UserVoteActionSummaryProps) => {
    const [summary_data, setSummaryData] = useState<VoteSummaryData | null>(null);

    // Data fetch
    useEffect(() => {
        const fetchData = async () => {
            const response = await get(`players/${user_id}/vote_summary`);
            const fetchedData: VoteSummaryData = await response;
            setSummaryData(fetchedData);
        };

        fetchData().catch((err) => {
            console.error(err);
        });
    }, [user_id]);

    if (!summary_data) {
        return <div>Loading...</div>;
    }
    return <VoteSummaryPie summary_data={summary_data} />;
};

export default UserVoteActionSummary;
