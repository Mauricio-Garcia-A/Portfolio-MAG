import * as React from "react"

const Logo = ({colorFigura1='#000', colorFigura2='#000', colorFigura3='#000', colorFigura4='#000', colorM='#000', colorA='#000',colorG='#000', colorPunto='#000' }) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={150}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 3979.32 2116.66"
  >
    <defs>
      <style>
        {
          "@font-face{font-family:\"Ailerons\";font-variant:normal;font-style:normal;font-weight:400;src:url(#FontID0) format(svg)}.str0{stroke-width:8.47;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.9256}.fil0,.fil1{}.fnt0,.fnt1{font-weight:400;font-size:423.33px;font-family:'Ailerons'}.fnt1{font-size:635px}"
        }
      </style>
      <font
        id="FontID0"
        horizAdvX={559}
        fontVariant="normal"
        style={{
          fillRule: "nonzero",
        }}
        fontStyle="normal"
        fontWeight={400}
      >
        <fontFace fontFamily="Ailerons">
          <fontFaceSrc>
            <fontFaceName name="Ailerons" />
          </fontFaceSrc>
        </fontFace>
        <missingGlyph>
          <path d="M0 0z" />
        </missingGlyph>
        <glyph
          unicode="."
          horizAdvX={500}
          d="M236 0v77.008S236 88 224 88h-60V20c1.008-10.992 10-20 21.008-20H236z"
        />
        <glyph
          unicode="A"
          horizAdvX={559}
          d="M425.011 0h-79.016l-63 482.012L219.993 0H141l105.993 699.998h39c30 0 35.008-18.992 38.008-38.008L425.012 0z"
        />
        <glyph
          unicode="M"
          horizAdvX={619}
          d="M467.012 699.998h-44.008c-26.008 0-30.993-21.992-32.008-24.992L312.003 272.01l-83.008 401.98s-3.993 26.008-31.985 26.008h-44.008V0h71.008v360.995l42-183.001c3.993-15 12-57 54-57h21.993l54 240.001V.001h71.009V700z"
        />
        <glyph
          unicode="g"
          horizAdvX={600}
          d="M410.011 618.005c0 48-39 87-87 88.985h-44.009c-48.992 0-89.008-39.992-89.008-88.985V81.993c0-48.992 40.016-88.985 89.008-88.985h44.008c48 1.984 87.001 40.985 87.001 88.985v255.002c0 27-13.016 39-35.008 39h-90l24-49.984s9.992-23.008 26.008-23.008h3V93.993c0-21-17.008-37.985-38.009-37.985-21 0-38.008 16.984-38.008 37.985v512.012c0 21 17.008 37.984 38.008 37.984 21 0 38.009-16.984 38.009-37.984V446.012c18.992 7.984 46.984 21 51.992 24 9.992 4.984 20.008 15 20.008 38.976v109.017z"
        />
      </font>
    </defs>
    <g id="Capa_x0020_1">
      <g id="_2285064765600">
        <path
            fill={colorFigura1}
            stroke={colorFigura1}
            className="fil0 str0"
            transform="rotate(45 432.486 1630.868) scale(3)"
            d="M0 0h118.54v541.87H0z"
        />
        <path
            fill={colorFigura2}
            stroke={colorFigura2}
            className="fil0 str0"
            d="m1998.29 171.89 251.46 251.46 897.72 897.72-252.82 252.82-897.72-897.72-896.66 896.66-251.46-251.46z"
        />
        <path
            fill={colorFigura3}
            stroke={colorFigura3}
            className="fil0 str0"
            d="m2339.55 1231.55-197.58-197.58-71.85 71.85-143.68 143.68 71.85 71.85 143.68-143.68 53.88 53.88-197.56 197.56-197.56-197.56 269.41-269.41-71.85-71.84-269.41 269.4-71.85 71.85 341.26 341.26 71.85-71.85 197.56-197.56z"
        />
        <path
            fill={colorFigura4}
            stroke={colorFigura4}
            className="fil0 str0"
            transform="rotate(45 1153.22 3366.238) scale(3)"
            d="M0 0h541.73v119.18H0z"
        />
      </g>
      <text x={242.76} y={2008.81} className="fil1 fnt0" fill={colorM} stroke={colorM}>
        {"M"}
      </text>
      <text x={1878.89} y={2009.07} className="fil1 fnt0" fill={colorA} stroke={colorA}>
        {"A"}
      </text>
      <text x={3491.11} y={2006.62} className="fil1 fnt0" fill={colorG} stroke={colorG}>
        {"G"}
      </text>
      <text x={2765.65} y={2008.75} className="fil1 fnt1" fill={colorPunto} stroke={colorPunto}>
        {"."}
      </text>
      <text x={980.21} y={2011.63} className="fil1 fnt1" fill={colorPunto} stroke={colorPunto}>
        {"."}
      </text>
    </g>
  </svg>
)

export default Logo
