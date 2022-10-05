import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Videos from "../../components/video/Videos";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos } from "../../redux/actions/videos.action";
import { useSelector } from "react-redux";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos } = useSelector((state) => state.homeVideos);
  return (
    <>
      <Container>
        <CategoriesBar />
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4}>
              <Videos video={video} key={video.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
