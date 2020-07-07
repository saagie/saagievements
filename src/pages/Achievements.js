import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppLayoutPage,
  Datalist,
  DatalistRow,
  DatalistCol,
  DatalistColActions,
  PageHeader,
  Icon,
} from "saagie-ui/react";

export const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch("/api/achievements")
      .then((body) => body.json())
      .then((achievements) => {
        setAchievements(achievements);
      });
  }, []);

  return (
    <div className="sui-l-app-layout">
      <div className="sui-l-app-layout__subapp">
        <AppLayoutPage>
          <PageHeader title="SaagieVements">
            <Link to="/new-achievement" className="sui-a-button as--primary">
              New achievement
            </Link>
          </PageHeader>
          <h3>Have fun to unlock the following achievements</h3>
          <Datalist isHover>
            {achievements.map((achievement) => (
              <DatalistRow key={achievement.goal}>
                <DatalistCol isLink level="primary">
                  {achievement.goal}
                </DatalistCol>
                <DatalistColActions size="xs">
                  <Icon
                    style={{ opacity: achievement.unlocked ? 1 : 0.4 }}
                    name={
                      achievement.unlocked ? "fa-trophy" : "fa-times-circle"
                    }
                    size="xl"
                  />
                </DatalistColActions>
              </DatalistRow>
            ))}
          </Datalist>
        </AppLayoutPage>
      </div>
    </div>
  );
};
