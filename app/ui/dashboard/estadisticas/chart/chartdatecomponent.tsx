'use client'
import { ResponsiveTimeRange } from '@nivo/calendar'


const data =     [
        {
          "value": 353,
          "day": "2018-08-11"
        },
        {
          "value": 220,
          "day": "2018-04-16"
        },
        {
          "value": 187,
          "day": "2018-06-25"
        },
        {
          "value": 314,
          "day": "2018-05-25"
        },
        {
          "value": 121,
          "day": "2018-04-30"
        },
        {
          "value": 313,
          "day": "2018-06-04"
        },
        {
          "value": 126,
          "day": "2018-07-02"
        },
        {
          "value": 344,
          "day": "2018-07-03"
        },
        {
          "value": 149,
          "day": "2018-07-29"
        },
        {
          "value": 152,
          "day": "2018-07-09"
        },
        {
          "value": 347,
          "day": "2018-07-24"
        },
        {
          "value": 6,
          "day": "2018-05-23"
        },
        {
          "value": 25,
          "day": "2018-04-06"
        },
        {
          "value": 381,
          "day": "2018-07-25"
        },
        {
          "value": 383,
          "day": "2018-06-01"
        },
        {
          "value": 144,
          "day": "2018-06-13"
        },
        {
          "value": 338,
          "day": "2018-04-13"
        },
        {
          "value": 336,
          "day": "2018-08-06"
        },
        {
          "value": 117,
          "day": "2018-06-16"
        },
        {
          "value": 94,
          "day": "2018-06-03"
        },
        {
          "value": 19,
          "day": "2018-06-06"
        },
        {
          "value": 101,
          "day": "2018-08-04"
        },
        {
          "value": 130,
          "day": "2018-06-30"
        },
        {
          "value": 90,
          "day": "2018-06-19"
        },
        {
          "value": 97,
          "day": "2018-05-13"
        },
        {
          "value": 44,
          "day": "2018-05-31"
        },
        {
          "value": 152,
          "day": "2018-07-11"
        },
        {
          "value": 276,
          "day": "2018-06-23"
        },
        {
          "value": 142,
          "day": "2018-04-27"
        },
        {
          "value": 335,
          "day": "2018-05-01"
        },
        {
          "value": 373,
          "day": "2018-04-22"
        },
        {
          "value": 20,
          "day": "2018-08-03"
        },
        {
          "value": 198,
          "day": "2018-07-05"
        },
        {
          "value": 81,
          "day": "2018-04-09"
        },
        {
          "value": 119,
          "day": "2018-07-14"
        },
        {
          "value": 163,
          "day": "2018-07-19"
        },
        {
          "value": 52,
          "day": "2018-04-20"
        },
        {
          "value": 363,
          "day": "2018-04-11"
        },
        {
          "value": 188,
          "day": "2018-04-10"
        },
        {
          "value": 293,
          "day": "2018-05-10"
        },
        {
          "value": 145,
          "day": "2018-04-28"
        },
        {
          "value": 389,
          "day": "2018-04-01"
        },
        {
          "value": 177,
          "day": "2018-04-05"
        },
        {
          "value": 259,
          "day": "2018-07-07"
        },
        {
          "value": 139,
          "day": "2018-07-20"
        },
        {
          "value": 279,
          "day": "2018-07-21"
        },
        {
          "value": 17,
          "day": "2018-04-14"
        },
        {
          "value": 126,
          "day": "2018-04-17"
        },
        {
          "value": 31,
          "day": "2018-07-30"
        },
        {
          "value": 324,
          "day": "2018-05-06"
        },
        {
          "value": 354,
          "day": "2018-06-08"
        },
        {
          "value": 120,
          "day": "2018-08-01"
        },
        {
          "value": 201,
          "day": "2018-07-22"
        },
        {
          "value": 392,
          "day": "2018-04-03"
        },
        {
          "value": 361,
          "day": "2018-08-09"
        },
        {
          "value": 298,
          "day": "2018-05-28"
        },
        {
          "value": 352,
          "day": "2018-05-26"
        },
        {
          "value": 145,
          "day": "2018-05-14"
        },
        {
          "value": 373,
          "day": "2018-04-19"
        },
        {
          "value": 164,
          "day": "2018-05-30"
        },
        {
          "value": 109,
          "day": "2018-05-11"
        },
        {
          "value": 248,
          "day": "2018-05-16"
        },
        {
          "value": 26,
          "day": "2018-05-19"
        },
        {
          "value": 134,
          "day": "2018-05-03"
        },
        {
          "value": 40,
          "day": "2018-05-22"
        },
        {
          "value": 205,
          "day": "2018-06-15"
        },
        {
          "value": 132,
          "day": "2018-06-27"
        },
        {
          "value": 150,
          "day": "2018-07-06"
        },
        {
          "value": 89,
          "day": "2018-07-28"
        },
        {
          "value": 113,
          "day": "2018-07-26"
        },
        {
          "value": 335,
          "day": "2018-04-12"
        },
        {
          "value": 372,
          "day": "2018-07-01"
        },
        {
          "value": 303,
          "day": "2018-07-15"
        },
        {
          "value": 229,
          "day": "2018-05-20"
        },
        {
          "value": 144,
          "day": "2018-08-10"
        },
        {
          "value": 387,
          "day": "2018-06-26"
        },
        {
          "value": 216,
          "day": "2018-06-28"
        },
        {
          "value": 258,
          "day": "2018-05-21"
        },
        {
          "value": 391,
          "day": "2018-06-10"
        },
        {
          "value": 84,
          "day": "2018-08-07"
        },
        {
          "value": 26,
          "day": "2018-06-11"
        },
        {
          "value": 211,
          "day": "2018-04-23"
        },
        {
          "value": 302,
          "day": "2018-05-12"
        },
        {
          "value": 110,
          "day": "2018-05-27"
        },
        {
          "value": 262,
          "day": "2018-07-10"
        },
        {
          "value": 31,
          "day": "2018-05-07"
        },
        {
          "value": 125,
          "day": "2018-06-22"
        },
        {
          "value": 353,
          "day": "2018-04-02"
        },
        {
          "value": 258,
          "day": "2018-07-18"
        },
        {
          "value": 201,
          "day": "2018-07-13"
        },
        {
          "value": 371,
          "day": "2018-04-07"
        },
        {
          "value": 237,
          "day": "2018-05-15"
        },
        {
          "value": 187,
          "day": "2018-07-16"
        },
        {
          "value": 146,
          "day": "2018-07-31"
        },
        {
          "value": 227,
          "day": "2018-06-09"
        },
        {
          "value": 349,
          "day": "2018-07-27"
        },
        {
          "value": 173,
          "day": "2018-05-02"
        },
        {
          "value": 98,
          "day": "2018-06-29"
        },
        {
          "value": 306,
          "day": "2018-07-23"
        },
        {
          "value": 171,
          "day": "2018-05-24"
        },
        {
          "value": 224,
          "day": "2018-04-24"
        },
        {
          "value": 330,
          "day": "2018-07-12"
        },
        {
          "value": 351,
          "day": "2018-06-07"
        },
        {
          "value": 134,
          "day": "2018-06-02"
        },
        {
          "value": 45,
          "day": "2018-04-25"
        },
        {
          "value": 214,
          "day": "2018-08-02"
        },
        {
          "value": 306,
          "day": "2018-04-15"
        },
        {
            "value": 134,
            "day": "2018-08-17"
          },
          {
            "value": 16,
            "day": "2018-08-18"
          },
          {
            "value": 23,
            "day": "2018-09-17"
          },
          {
            "value": 224,
            "day": "2018-04-8"
          },
          {
            "value": 330,
            "day": "2018-09-12"
          },
          {
            "value": 351,
            "day": "2018-09-07"
          },
          {
            "value": 134,
            "day": "2018-08-31"
          },
          {
            "value": 45,
            "day": "2018-08-27"
          },
          {
            "value": 214,
            "day": "2018-09-02"
          },
          {
            "value": 214,
            "day": "2018-08-23"
          },
          {
            "value": 214,
            "day": "2018-08-20"
          },
          {
            "value": 456,
            "day": "2018-08-21"
          },
          {
            "value": 74,
            "day": "2018-08-22"
          },
          {
            "value": 74,
            "day": "2018-09-03"
          },
          {
            "value": 123,
            "day": "2018-09-05"
          },
          {
            "value": 321,
            "day": "2018-09-06"
          },

      ]



export const MyResponsiveTimeRange = ({...props}) => (
    <div
    {...props}
    >
    <ResponsiveTimeRange
        data={data}
        from="2018-04-01"
        to="2018-08-05"
        emptyColor="#eeeeee"
        colors={[ "#2563EB", '#6691f1', '#a7c0f7', '#e9effd' ]}
        minValue={-54}
        weekdayTicks={[0, 1, 2, 3, 4, 5, 6, ]}
        margin={{ top: 40, right: 10, bottom: 0, left: 15 }}
        weekdayLegendOffset={30}
        dayRadius={5}
        daySpacing={5}
        dayBorderWidth={0}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                symbolShape: 'circle',
                itemDirection: 'right-to-left',
                translateX: -60,
                translateY: -45,
                symbolSize: 14
            }
        ]}
    />
    </div>
)