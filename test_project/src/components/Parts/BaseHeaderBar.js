
const BaseHeaderBar = (props) => {


return (
    <>
        <div {...props}>
            <svg
                width="1488px" height="108px">
                <defs>
                    <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="1488px" height="108px"  >
                        <feOffset in="SourceAlpha" dx="0" dy="1" />
                        <feGaussianBlur result="blurOut" stdDeviation="0" />
                        <feFlood flood-color="rgb(255, 255, 255)" result="floodOut" />
                        <feComposite operator="atop" in="floodOut" in2="blurOut" />
                        <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                </defs>
                <g filter="url(#Filter_0)">
                    <path fill-rule="evenodd" opacity="0.302" fill="rgb(7, 7, 7)"
                        d="M4.000,2.1000 L1483.1000,2.1000 L1483.1000,102.999 L4.000,102.999 L4.000,2.1000 Z" />
                </g>
            </svg>
        </div>
    </>
);
}
export { BaseHeaderBar };