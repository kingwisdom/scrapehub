import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-google-multi-lang";
import { useInView } from "react-intersection-observer";
import {
  GetMoreVideos,
  GetSearchedPHVideos,
  GetSearchedRedtubeVideos,
  GetSearchedXVideos,
  GetSearchedXXVideos,
  GetVideos,
} from "../services/AppServices";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Virtuoso } from "react-virtuoso";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchItems } from "../services/itemsApi";
import { withTranslation } from "react-google-multi-lang";

const Home = () => {
  const nav = useNavigate();
  const { setLanguage } = useTranslation();
  useEffect(() => {
    getMoreEncounter(page);
  }, []);

  const [page, setPage] = useState(1);

  const [moreConnections, setMoreConnections] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    data: videoLoaded,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["connections"],
    queryFn: GetVideos,
    initialPageParam: 1,
    getNextPageParam: (lastpage) => lastpage.nextPage,
  });

  // console.log(videoLoaded);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const getMoreEncounter = async (p) => {
    setLoading(true);
    await GetMoreVideos(p)
      .then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          setMoreConnections(response?.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const prevClick = () => {
    if (page < 1) {
      return;
    }
    let click = page - 1;
    setPage(click);
    getMoreEncounter(page);
  };
  const nextClick = () => {
    let click = page + 1;
    setPage(click);
    getMoreEncounter(page);
  };
  //https://lust.scathach.id/pornhub/related?id=ph63c4e1dc48fe7
  //https://lust.scathach.id/youporn/search?key=teen&page=2

  const [combinedResults, setCombinedResults] = useState([]);
  const [loadSearch, setLoadSearch] = useState(false);
  const handleSearch = async () => {
    setLoadSearch(true);
    try {
      const results = await Promise.allSettled([
        GetSearchedPHVideos(search),
        GetSearchedXVideos(search),
        GetSearchedXXVideos(search),
        GetSearchedRedtubeVideos(search),
      ]);
      const combinedResults = results
        .filter((result) => result.status === "fulfilled")
        .flatMap((result) => result.value.data.data);

      setCombinedResults(combinedResults);
      setLoadSearch(false);
      // console.log(combinedResults);
    } catch (error) {
      setLoadSearch(false);
      toast.error("something went wrong");
      console.error("Error fetching videos:", error);
    }
  };

  if (isLoading) {
    return (
      <p style={{ textAlign: "center", alignItems: "center" }}>Loading...</p>
    );
  }
  // if (error) {
  //   return (
  //     <p
  //       className="text-danger"
  //       style={{ textAlign: "center", alignItems: "center" }}
  //     >
  //       {error.message}
  //     </p>
  //   );
  // }
  return (
    <>
      <div>
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("es")}>Spanish</button>
        <button onClick={() => setLanguage("fr")}>French</button>
      </div>
      <header className="header bg-white header-fixed border-0 style-2">
        <div className="container">
          <div className="header-content">
            {/* <div className="left-content style-2">
                            <a href="#" className="menu-toggler icon-fill">
                                <i className="icon feather icon-grid" />
                            </a>
                        </div> */}
            <div className="mid-content">
              <h5 className="title">Encounters</h5>
            </div>
            <div className="right-content d-flex gap-2">
              <a
                href="javascript:void(0);"
                className="filter-icon icon-fill"
                data-bs-toggle="offcanvas"
                data-bs-target="#settingCanvas"
                aria-controls="offcanvasBottom"
              ></a>
            </div>
          </div>
        </div>
      </header>

      {message &&
        setTimeout(() => {
          <div className="alert alert-danger">{message}</div>;
        }, 3000)}
      {/* main content */}

      <div className="page-content space-top p-b70">
        <input
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Please search for any video"
        />
        <button
          className="btn btn-block btn-outline-primary btn-sm my-2 mx-2"
          onClick={handleSearch}
        >
          {loadSearch ? "Searching..." : "Search"}
        </button>
        <hr />
        <div className="container pt-0">
          {combinedResults?.length > 0 ? (
            <div className="row g-2">
              <Virtuoso
                data={combinedResults}
                itemContent={(index, item) => (
                  <div className="col-12">
                    <a
                      data-toggle="modal"
                      data-target={`#itemModalLong${index}`}
                    >
                      <div className="dz-media-card style-5">
                        <a
                          className="dz-media"
                          style={{ position: "relative" }}
                        >
                          <img
                            src={
                              !item?.image
                                ? "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                                : item?.image
                            }
                            alt=""
                            style={{ height: 170 }}
                          />
                        </a>
                        <img
                          src="assets/icons/play.png"
                          alt="play icon"
                          style={{
                            position: "absolute",
                            top: "40%",
                            left: "40%",
                            height: 40,
                          }}
                        />
                        <div className="dz-content">
                          <div className="left-content">
                            <h6 className="title">{item?.duration}</h6>
                            <span className="about">{item?.views}</span>
                          </div>

                          <small style={{ textAlign: "center" }}>
                            {item?.title?.substring(0, 35)}...
                          </small>
                        </div>
                      </div>
                    </a>
                    <div
                      className="modal fade"
                      id={`itemModalLong${index}`}
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              {item?.title?.substring(0, 60)}
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="col-12">
                              {/* <iframe src={item?.video} frameborder="0" width="100%" height="315"></iframe> */}
                              <iframe
                                id=""
                                width="100%"
                                height="350"
                                src={item?.video}
                                frameborder="0"
                                allowfullscreen
                              ></iframe>
                              <a
                                className="text-center"
                                href={item?.video}
                                target="_blank"
                              >
                                if not played, Play here
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          ) : (
            <>
              <div>
                {videoLoaded?.pages.map((page) => {
                  return (
                    <div key={page?.currentPage} className="row g-2">
                      {page?.data.data.map((item, index) => {
                        {
                          console.log(item.length);
                        }
                        return (
                          <div className="col-6" key={index}>
                            <div
                              className="dz-media-card style-5"
                              onClick={() => {
                                nav("/video", {
                                  state: { item },
                                });
                              }}
                            >
                              <a
                                className="dz-media"
                                style={{ position: "relative" }}
                              >
                                <img
                                  src={
                                    !item?.image
                                      ? "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                                      : item?.image
                                  }
                                  alt=""
                                  style={{ height: 170 }}
                                />
                              </a>
                              <img
                                src="assets/icons/play.png"
                                alt="play icon"
                                style={{
                                  position: "absolute",
                                  top: "40%",
                                  left: "40%",
                                  height: 40,
                                }}
                              />
                              <div className="dz-content">
                                <div className="left-content">
                                  <h6 className="title">{item?.duration}</h6>
                                  <span className="about">{item?.views}</span>
                                </div>

                                <small style={{ textAlign: "center" }}>
                                  {item?.title?.substring(0, 35)}...
                                </small>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              {/* <div ref={ref}></div> */}
              <div className="row g-2">
                {moreConnections?.map((item, index) => (
                  <div className="col-6" key={index}>
                    <div
                      className="dz-media-card style-5"
                      onClick={() => {
                        nav("/video", {
                          state: { item },
                        });
                      }}
                    >
                      <a
                        href="#"
                        className="dz-media"
                        style={{ position: "relative" }}
                      >
                        <img
                          src={
                            !item?.image
                              ? "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                              : item?.image
                          }
                          alt=""
                          style={{ height: 170 }}
                        />
                      </a>
                      <img
                        src="assets/icons/play.png"
                        alt="play icon"
                        style={{
                          position: "absolute",
                          top: "40%",
                          left: "40%",
                          height: 40,
                        }}
                      />
                      <div className="dz-content">
                        <div className="left-content">
                          <h6 className="title">{item?.duration}</h6>
                          <span className="about">{item?.views}</span>
                        </div>

                        <small style={{ textAlign: "center" }}>
                          {item?.title?.substring(0, 35)}...
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* buttons */}
          <div className="d-flex">
            <a href="#" className="btn" onClick={prevClick}>
              Prev
            </a>
            <a href="#" className="btn" onClick={nextClick}>
              Next
            </a>
          </div>
          <div ref={ref}></div>
          {isFetchingNextPage && <p className="text-center">loading...</p>}
        </div>
      </div>

      {/*  Setting OffCanvas */}
      <ToastContainer />
    </>
  );
};

export default withTranslation(Home);
