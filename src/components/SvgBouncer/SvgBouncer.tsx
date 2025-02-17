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

import * as React from "react";

/*

 * The "bouncing OGS logo".

 * This is copied from the code in index.html.
 * The only difference is it has twice as big viewport, resulting in half-size ball.

 * The css in index.html gets applied to this, which is what makes it work.

 */

export function SvgBouncer(): React.ReactElement {
    return (
        <div id="loading-svg-container">
            <div id="svg-bouncer">
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40.733135mm"
                    height="40.733135mm"
                    viewBox="0 0 80.733135 80.733135"
                    version="1.1"
                >
                    <g transform="translate(-76.395338,-117.88343)">
                        <g transform="matrix(0.28222223,0,0,0.28222223,76.397031,109.18478)">
                            <g>
                                <g>
                                    <g>
                                        <g id="g16">
                                            <path
                                                style={{ fill: "#010101" }}
                                                d="m 144.324,102.987 c 0,39.855 -32.31,72.165 -72.165,72.165 -39.855,0 -72.165,-32.31 -72.165,-72.165 0,0 144.33,0 144.33,0 z"
                                            />
                                            <path
                                                style={{ fill: "#dededd" }}
                                                d="m 72.159,30.822 c 39.855,0 72.165,32.31 72.165,72.165 H -0.006 c 0,-39.855 32.31,-72.165 72.165,-72.165 z"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g id="g22">
                                {" "}
                                <path
                                    style={{ fill: "#ffffff" }}
                                    d="m 9.821,95.52 c 0,0 -0.073,-0.322 -0.144,-0.925 -0.061,-0.601 -0.179,-1.497 -0.206,-2.624 -0.076,-2.257 0.037,-5.492 0.733,-9.296 0.334,-1.906 0.836,-3.942 1.473,-6.075 0.675,-2.116 1.457,-4.344 2.491,-6.559 0.998,-2.231 2.197,-4.475 3.589,-6.657 1.385,-2.187 2.932,-4.337 4.674,-6.337 0.839,-1.024 1.791,-1.96 2.703,-2.916 0.936,-0.936 1.93,-1.811 2.903,-2.683 2.018,-1.676 4.112,-3.195 6.251,-4.477 2.132,-1.294 4.307,-2.341 6.404,-3.204 1.072,-0.39 2.095,-0.789 3.103,-1.123 1.033,-0.28 2.016,-0.563 2.967,-0.799 1.917,-0.433 3.689,-0.716 5.262,-0.868 1.591,-0.099 2.944,-0.215 4.086,-0.155 1.135,0.035 2.029,0.137 2.628,0.176 0.602,0.053 0.923,0.102 0.923,0.102 0,0 -0.273,0.193 -0.785,0.516 -0.515,0.309 -1.255,0.807 -2.199,1.345 -0.944,0.543 -2.042,1.304 -3.307,2.052 -0.636,0.367 -1.278,0.832 -1.961,1.281 -0.673,0.473 -1.42,0.86 -2.125,1.413 -0.719,0.52 -1.475,1.027 -2.243,1.563 -0.746,0.561 -1.517,1.141 -2.31,1.737 -1.559,1.206 -3.15,2.504 -4.738,3.89 -0.8,0.683 -1.565,1.439 -2.373,2.148 -0.787,0.738 -1.537,1.537 -2.337,2.283 -0.758,0.795 -1.523,1.596 -2.29,2.4 -0.722,0.85 -1.524,1.625 -2.222,2.505 -0.735,0.845 -1.461,1.698 -2.155,2.579 -0.713,0.863 -1.406,1.745 -2.082,2.63 -0.668,0.897 -1.332,1.787 -1.987,2.666 -0.616,0.912 -1.274,1.784 -1.878,2.679 -1.234,1.771 -2.376,3.54 -3.476,5.231 -1.075,1.704 -2.114,3.332 -3.037,4.873 -1.88,3.066 -3.431,5.724 -4.55,7.614 -1.136,1.917 -1.785,3.015 -1.785,3.015 z"
                                    id="path24"
                                />{" "}
                            </g>
                            <g id="g26">
                                {" "}
                                <path
                                    style={{ fill: "#272626" }}
                                    d="m 84.158,162.625 c 0,0 1.033,-0.747 2.84,-2.055 1.779,-1.289 4.282,-3.079 7.162,-5.233 1.449,-1.06 2.975,-2.245 4.572,-3.473 1.583,-1.252 3.239,-2.551 4.889,-3.943 0.835,-0.684 1.643,-1.419 2.494,-2.117 0.815,-0.733 1.64,-1.476 2.472,-2.224 0.819,-0.755 1.633,-1.527 2.427,-2.316 0.813,-0.773 1.597,-1.574 2.37,-2.384 0.812,-0.776 1.51,-1.647 2.29,-2.444 0.73,-0.838 1.457,-1.673 2.179,-2.501 0.669,-0.866 1.396,-1.687 2.058,-2.538 0.632,-0.87 1.314,-1.701 1.921,-2.561 1.234,-1.71 2.38,-3.413 3.437,-5.077 0.52,-0.844 1.027,-1.666 1.516,-2.46 0.463,-0.814 0.898,-1.613 1.35,-2.377 0.486,-0.753 0.802,-1.532 1.211,-2.246 0.384,-0.722 0.787,-1.404 1.094,-2.071 0.629,-1.329 1.285,-2.492 1.739,-3.482 0.449,-0.99 0.876,-1.772 1.136,-2.314 0.274,-0.54 0.441,-0.829 0.441,-0.829 0,0 0.079,0.316 0.187,0.91 0.095,0.593 0.279,1.473 0.418,2.601 0.165,1.131 0.175,2.49 0.223,4.083 -0.006,1.58 -0.125,3.372 -0.379,5.32 -0.148,0.969 -0.339,1.974 -0.522,3.029 -0.24,1.034 -0.543,2.09 -0.832,3.193 -0.667,2.168 -1.508,4.43 -2.601,6.672 -1.08,2.248 -2.399,4.474 -3.882,6.638 -0.779,1.05 -1.559,2.12 -2.404,3.138 -0.868,0.995 -1.712,2.03 -2.654,2.96 -1.832,1.919 -3.829,3.658 -5.88,5.238 -2.044,1.587 -4.169,2.987 -6.298,4.187 -2.11,1.234 -4.257,2.218 -6.301,3.085 -2.066,0.831 -4.047,1.518 -5.914,2.026 -3.724,1.043 -6.935,1.454 -9.189,1.587 -1.126,0.077 -2.028,0.042 -2.632,0.037 -0.611,-0.016 -0.938,-0.059 -0.938,-0.059 z"
                                    id="path28"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}
