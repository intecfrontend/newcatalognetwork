import React, { useEffect } from 'react'

import styled from 'styled-components';
import Item from './Item-magazine';
import axios from 'axios'

const Wrapper = styled.div`
position: relative;
      display: flex;
      justify-content: center;
      width: 80vw;
      height: 85vh;
      padding: 50px 0px;
background: rgb(232, 232, 232);
overflow: hidden; /* Hide scrollbars */
;
`;
const Main = styled.div`
      width: 95vw;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
      gap: 10px;overflow: hidden; /* Hide scrollbars */
`;
const Cover = styled.div`
width: 80vw;
height: 20vh;
background: linear-gradient(to bottom, rgba(232, 232, 232, 0) 0%, rgba(232, 232, 232, .9) 60%, rgba(232, 232, 232, 1) 100%);
display:flex;
justify-content: center;
align-items: flex-end;
padding-bottom: 60px;
z-index: 999;
margin-top:  calc(-60px - 20vh);
`;
const Container = styled.div`
display: flex;
height: calc(100vh - 40px);
align-items: flex-end;
flex-direction: column;overflow: hidden; /* Hide scrollbars */
`;

const Firmaitem = () => {

  useEffect(() => {
    let query = "delhaize"
    let options = {
      "from": 0,
      "size": 30,
      "query": {
        "bool": {
          "minimum_should_match": 1,
          "should": [
            {
              "simple_query_string": {
                "query": `\"${query}\"`,
                "fields": [
                  "cmp_collectionlinks.name_nl",
                  "cmp_collectionlinks.name_fr",
                  "cmp_collectionlinks.name_de",
                  "cmp_collectionlinks.name_en"
                ],
                "boost": 1100
              }
            },
            {
              "simple_query_string": {
                "query": `\"${query}\"`,
                "fields": [
                  "cmp_collectionlinks.cmps.name_nl",
                  "cmp_collectionlinks.cmps.name_fr",
                  "cmp_collectionlinks.cmps.name_de",
                  "cmp_collectionlinks.cmps.name_en"
                ],
                "boost": 1100
              }
            },
            {
              "simple_query_string": {
                "query": `\"${query}\"`,
                "fields": [
                  "name_nl",
                  "name_fr",
                  "name_de",
                  "name_en",
                  "from_enterprise.official_name_nl",
                  "from_enterprise.official_name_fr",
                  "from_enterprise.official_name_de",
                  "from_enterprise.official_name_en",
                  "from_enterprise.name_nl",
                  "from_enterprise.name_fr",
                  "from_enterprise.name_de",
                  "from_enterprise.name_en"
                ],
                "boost": 90
              }
            },
            {
              "match_phrase_prefix": {
                "name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "fuzzy": {
                "name_nl": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "name_fr": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "name_de": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "name_en": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_nl": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_fr": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_de": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_en": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_nl": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_fr": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_de": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_en": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_nl": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_fr": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_de": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_en": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_nl": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_fr": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_de": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_en": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            }
          ],
          "filter": [
            {
              "term": {
                "active": true
              }
            },
            {
              "exists": {
                "field": "cmp_collectionlinks"
              }
            }
          ]
        }
      }
    }

    axios.get(`https://search-osn-management-hkfarflgp5aj2vbhfzvmyycuuy.eu-central-1.es.amazonaws.com/establishments/_search`,
      {
        auth: {
          username: `osn-admin`,
          password: `O15s19n14!`,
        },
        params: {
          source_content_type: "application/json",
          source: JSON.stringify(options),
        }
      })
      .then((res) => {
        console.log(res.data.hits.hits)
        console.log(res.data.hits.hits)
      })

  }, [])

  return (
    <Container>
      <Wrapper>
        <div className="ONntwk__selectwrapper">
        <select className="ONntwk__bluecardbtn ONntwk__SORTbtn">
          <option className="ONntwk__taalOptie" value="1">SORTEREN</option>
          <option className="ONntwk__taalOptie" value="2">2</option>
          <option className="ONntwk__taalOptie" value="3">3</option>
          <option className="ONntwk__taalOptie" value="4">4</option>
        </select></div>
        <Main>

          <Item />
        </Main>
      </Wrapper>
      <Cover>
        <div className="ONntwk__bluecardbtn ONntwk__btncont">
          <div className="ONntwk__bluecardbtn ONntwk__regularbtn">TOON MEER</div>
        </div>
      </Cover>

    </Container>
  )
}

export default Firmaitem