
const contentsOverview = {
    "result_count" : 5,
    "results" : [
        {
            "content_id" : "a234",
            "title_kr" : "어벤져스",
            "title_en" : "avengers",
            "release_date" : "2012-02-12",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/a234.jpg",
            "top_words" : ["thor","ironman","thanos"]
        },
        {
            "content_id" : "b456",
            "title_kr" : "스파이더",
            "title_en" : "spiderman",
            "release_date" : "2015-07-17",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/b456.jpg",
            "top_words" : ["spiderman","peter","tom"]
        },
        {
            "content_id" : "c789",
            "title_kr" : "조커",
            "title_en" : "joker",
            "release_date" : "2020-01-01",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/c789.jpg",
            "top_words" : ["joker","joaquin","arthur"]
        },
        {
            "content_id" : "d123",
            "title_kr" : "기생충",
            "title_en" : "parasite",
            "release_date" : "2020-01-01",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/d123.jpg",
            "top_words" : ["parasite","capitalism","cannes"]
        },
        {
            "content_id" : "e456",
            "title_kr" : "인셉션",
            "title_en" : "inception",
            "release_date" : "2015-07-17",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/e456.jpg",
            "top_words" : ["nolan","zimmer","dicaprio"]
        }
    ]
}

const contentsOverview10 = {
    "result_count" : 10,
    "results" : [
        {
            "content_id" : "a234",
            "title_kr" : "어벤져스",
            "title_en" : "avengers",
            "release_date" : "2012-02-12",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/a234.jpg",
            "top_words" : ["thor","ironman","thanos"]
        },
        {
            "content_id" : "b456",
            "title_kr" : "스파이더",
            "title_en" : "spiderman",
            "release_date" : "2015-07-17",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/b456.jpg",
            "top_words" : ["spiderman","peter","tom"]
        },
        {
            "content_id" : "c789",
            "title_kr" : "조커",
            "title_en" : "joker",
            "release_date" : "2020-01-01",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/c789.jpg",
            "top_words" : ["joker","joaquin","arthur"]
        },
        {
            "content_id" : "d123",
            "title_kr" : "기생충",
            "title_en" : "parasite",
            "release_date" : "2020-01-01",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/d123.jpg",
            "top_words" : ["parasite","capitalism","cannes"]
        },
        {
            "content_id" : "e456",
            "title_kr" : "인셉션",
            "title_en" : "inception",
            "release_date" : "2015-07-17",
            "content_type" : "movie",
            "is_single" : true,
            "poster_url" : "/test/posters/e456.jpg",
            "top_words" : ["nolan","zimmer","dicaprio"]
        },
        {
            "content_id" : "j901",
            "title_kr" : "에이전트 오브 쉴드",
            "title_en" : "Marvel's Agents of S.H.I.E.L.D.",
            "release_date" : "2013-07-17",
            "content_type" : "drama",
            "is_single" : false,
            "poster_url" : "/test/posters/j901.jpg",
            "top_words" : ["coulson","melinda","skye"]
        },
        {
            "content_id" : "i678",
            "title_kr" : "악마는 사라지지 않는다",
            "title_en" : "The Devil All the Time",
            "release_date" : "2020-07-17",
            "content_type" : "drama",
            "is_single" : false,
            "poster_url" : "/test/posters/i678.jpg",
            "top_words" : ["tom","holland","russel"]
        },
        {
            "content_id" : "h345",
            "title_kr" : "에놀라 홈즈",
            "title_en" : "enola holmes",
            "release_date" : "2020-07-17",
            "content_type" : "drama",
            "is_single" : false,
            "poster_url" : "/test/posters/h345.jpg",
            "top_words" : ["enola","millie","holmes"]
        },
        {
            "content_id" : "g012",
            "title_kr" : "셜록",
            "title_en" : "sherlock",
            "release_date" : "2010-07-17",
            "content_type" : "drama",
            "is_single" : false,
            "poster_url" : "/test/posters/g012.jpg",
            "top_words" : ["benedict","sherlock","moriarty"]
        },
        {
            "content_id" : "f789",
            "title_kr" : "종이의 집",
            "title_en" : "la casa de papel",
            "release_date" : "2020-01-17",
            "content_type" : "drama",
            "is_single" : false,
            "poster_url" : "/test/posters/f789.jpg",
            "top_words" : ["tokio","rio","professor"]
        }
    ]
}

const contentDetails = [
    {
        "content_id" : "a234",
        "title_kr" : "어벤져스",
        "title_en" : "avengers",
        "release_date" : "2012-02-12",
        "content_type" : "movie",
        "is_single" : true,
        "poster_url" : "/test/posters/a234.jpg",
        "top_words" : ["thor","ironman","thanos"],
        "sub_type" : ["action","fantasy"],

        "is_hot" : true,

        "single_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat",
                "url" : "/test/statistics/sampleStat.png"
            }
        ],
        "type_additional_data" : {
            "casts" : ["robert downey jr", "chris hemsworth", "chris evans"],
            "director" : "joss whedon",
            "rating" : 8.5
        },
        "season_data" : {
            "season_count" : 0, // single contents이므로.
            "seasons" : []
        }
    },
    {
        "content_id" : "b456",
        "title_kr" : "스파이더",
        "title_en" : "spiderman",
        "release_date" : "2015-07-17",
        "content_type" : "movie",
        "is_single" : true,
        "poster_url" : "/test/posters/b456.jpg",
        "top_words" : ["spiderman","peter","tom"],
        "sub_type" : ["action", "fantasy"],

        "is_hot" : false,

        "single_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat",
                "url" : "/test/statistics/sampleStat.png"
            }
        ],
        "type_additional_data" : {
            "casts" : ["robert downey jr", "tom holland", "michael keaton"],
            "director" : "john watts",
            "rating" : 9.0
        },
        "season_data" : {
            "season_count" : 0, // single contents이므로.
            "seasons" : []
        }
    },
    {
        "content_id" : "c789",
        "title_kr" : "조커",
        "title_en" : "joker",
        "release_date" : "2020-01-01",
        "content_type" : "movie",
        "is_single" : true,
        "poster_url" : "/test/posters/c789.jpg",
        "top_words" : ["joker","joaquin","arthur"],
        "sub_type" : ["thriller","horror","crime"],

        "is_hot" : true,

        "single_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat",
                "url" : "/test/statistics/sampleStat.png"
            }
        ],
        "type_additional_data" : {
            "casts" : ["joaquin phoenix", "robert de niro"],
            "director" : "todd phillips",
            "rating" : 9.5
        },
        "season_data" : {
            "season_count" : 0, // single contents이므로.
            "seasons" : []
        }
    },
    {
        "content_id" : "d123",
        "title_kr" : "기생충",
        "title_en" : "parasite",
        "release_date" : "2020-01-01",
        "content_type" : "movie",
        "is_single" : true,
        "poster_url" : "/test/posters/d123.jpg",
        "top_words" : ["parasite","capitalism","cannes"],
        "sub_type" : ["thriller","drama","comedy"],

        "is_hot" : true,

        "single_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat",
                "url" : "/test/statistics/sampleStat.png"
            }
        ],
        "type_additional_data" : {
            "casts" : ["song kang ho", "park so dam", "lee sun kyun", "cho yeo jeong"],
            "director" : "bong joon ho",
            "rating" : 10.0
        },
        "season_data" : {
            "season_count" : 0, // single contents이므로.
            "seasons" : []
        }
    },
    {
        "content_id" : "e456",
        "title_kr" : "인셉션",
        "title_en" : "inception",
        "release_date" : "2015-07-17",
        "content_type" : "movie",
        "is_single" : true,
        "poster_url" : "/test/posters/e456.jpg",
        "top_words" : ["nolan","zimmer","dicaprio"],
        "sub_type" : ["action","sci-fi"],

        "is_hot" : false,

        "single_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat",
                "url" : "/test/statistics/sampleStat.png"
            }
        ],
        "type_additional_data" : {
            "casts" : ["leonardo dicaprio", "ken watanabe", "joseph gordon levitt"],
            "director" : "christopher nolan",
            "rating" : 8.5
        },
        "season_data" : {
            "season_count" : 0, // single contents이므로.
            "seasons" : []
        }
    },
    {
        "content_id" : "j901",
        "title_kr" : "에이전트 오브 쉴드",
        "title_en" : "Marvel's Agents of S.H.I.E.L.D.",
        "release_date" : "2013-07-17",
        "content_type" : "drama",
        "is_single" : false,
        "poster_url" : "/test/posters/j901.jpg",
        "top_words" : ["coulson","melinda","skye"],
        "sub_type" : ["action","drama","sci-fi"],

        "is_hot" : false,

        "single_statistics" : [

        ],
        "type_additional_data" : {
            "casts" : ["clark gregg", "samuel l jackson"],
            "director" : "joss whedon",
            "rating" : 8.5
        },
        "season_data" : {
            "season_count" : 2,
            "seasons" : [ObjectId("5fa2550bd415daab6e296014"), ObjectId("5fa25b55d415daab6e296018")]
        }
    },
    {
        "content_id" : "i678",
        "title_kr" : "악마는 사라지지 않는다",
        "title_en" : "The Devil All the Time",
        "release_date" : "2020-07-17",
        "content_type" : "drama",
        "is_single" : false,
        "poster_url" : "/test/posters/i678.jpg",
        "top_words" : ["tom","holland","russel"],
        "sub_type" : ["thriller","crime"],

        "is_hot" : true,

        "single_statistics" : [

        ],
        "type_additional_data" : {
            "casts" : ["tom holland"],
            "director" : "antonio campos",
            "rating" : 8.5
        },
        "season_data" : {
            "season_count" : 1, //single season
            "seasons" : [ObjectId("5fa2550bd415daab6e296014")]
        }
    },
    {
        "content_id" : "h345",
        "title_kr" : "에놀라 홈즈",
        "title_en" : "enola holmes",
        "release_date" : "2020-07-17",
        "content_type" : "drama",
        "is_single" : false,
        "poster_url" : "/test/posters/h345.jpg",
        "top_words" : ["enola","millie","holmes"],
        "sub_type" : ["crime","adventure","mystery"],

        "is_hot" : false,

        "single_statistics" : [

        ],
        "type_additional_data" : {
            "casts" : ["millie bobby brown", "sam claflin", "henry cavil"],
            "director" : "harry bradbeer",
            "rating" : 7.5
        },
        "season_data" : {
            "season_count" : 1, // single season
            "seasons" : [ObjectId("5fa2550bd415daab6e296014")]
        }
    },
    {
        "content_id" : "g012",
        "title_kr" : "셜록",
        "title_en" : "sherlock",
        "release_date" : "2010-07-17",
        "content_type" : "drama",
        "is_single" : false,
        "poster_url" : "/test/posters/g012.jpg",
        "top_words" : ["benedict","sherlock","moriarty"],
        "sub_type" : ["crime","adventure","mystery"],

        "is_hot" : false,

        "single_statistics" : [

        ],
        "type_additional_data" : {
            "casts" : ["benedict cumberbatch", "martin freeman"],
            "director" : "steven moffat",
            "rating" : 8.5
        },
        "season_data" : {
            "season_count" : 2,
            "seasons" : [ObjectId("5fa2550bd415daab6e296014"), ObjectId("5fa25b55d415daab6e296018")]
        }
    },
    {
        "content_id" : "f789",
        "title_kr" : "종이의 집",
        "title_en" : "la casa de papel",
        "release_date" : "2020-01-17",
        "content_type" : "drama",
        "is_single" : false,
        "poster_url" : "/test/posters/f789.jpg",
        "top_words" : ["tokio","rio","professor"],
        "sub_type" : ["thriller","crime","drama"],

        "is_hot" : true,

        "single_statistics" : [

        ],
        "type_additional_data" : {
            "casts" : ["ursula corbero", "alvaro morte"],
            "director" : "alex pina",
            "rating" : 9.5
        },
        "season_data" : {
            "season_count" : 2,
            "seasons" : [ObjectId("5fa2550bd415daab6e296014"), ObjectId("5fa25b55d415daab6e296018")]
        }
    }
]


// "season_data" : {
//     "season_count" : 2,
//         "seasons" : [
//         {
//             "$oid" : "5fa2550bd415daab6e296014"
//         },
//         {
//             "$oid" : "5fa25b55d415daab6e296018"
//         }
//     ]
// }
//테스트용에서는 같은 데이터 링크 걸어놓으면 되기 때문에 episode 개수가 다른 2개만 만듬.
const seasonDetails = [
    {
        "episode_count" :3,
        "season_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud for season1",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat for season1",
                "url" : "/test/statistics/sampleStat.png"
            }
        ],
        "episodes" : [ObjectId("5fa253c010e1484f9858b101"), ObjectId("5fa253d010e1484f9858b102"),
        ObjectId("5fa253db10e1484f9858b103")]
    },
    {
        "episode_count" :4,
        "season_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud for season1",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat for season1",
                "url" : "/test/statistics/sampleStat.png"
            }
        ],
        "episodes" : [ObjectId("5fa253c010e1484f9858b101"), ObjectId("5fa253d010e1484f9858b102"),
            ObjectId("5fa253db10e1484f9858b103"), ObjectId("5fa253e310e1484f9858b104")]
    }
]

//전부 같은 형태일 것. 다만 다른 object id 넣기 위해서 name만 다른 최대 4개의 복제본 생성해 사용함
const leafEpisodes = [
    {
        "episode_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud for episode1",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat for episode1",
                "url" : "/test/statistics/sampleStat.png"
            }
        ]
    },
    {
        "episode_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud for episode2",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat for episode2",
                "url" : "/test/statistics/sampleStat.png"
            }
        ]
    },
    {
        "episode_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud for episode3",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat for episode3",
                "url" : "/test/statistics/sampleStat.png"
            }
        ]
    },
    {
        "episode_statistics" : [
            {
                "statistics_type" : "wordcloud",
                "statistics_name" : "wordcloud for episode4",
                "url" : "/test/statistics/wordCloud.png"
            },
            {
                "statistics_type" : "sampleStat",
                "statistics_name" : "sampleStat for episode4",
                "url" : "/test/statistics/sampleStat.png"
            }
        ]
    }
]

export default {
    contentsOverview,
    contentsOverview10,
    contentDetails,
    seasonDetails,
    leafEpisodes
};