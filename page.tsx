"use client";

import { useState } from "react";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"home" | "explore">(
    "home",
  );

  return (
    <main className="app-shell">
      <section
        id="screen-home"
        className="screen"
        hidden={currentScreen !== "home"}
        aria-hidden={currentScreen !== "home"}
      >
        <div className="entry-content">
          <h1>Kit Gaw</h1>

          <p className="service-description">
            趣味・経験・生活スタイルから、
            <br />
            気になる部屋を自分で歩く
            <br />
            コミュニティSNS。
          </p>

          <p className="concept-copy">人を探すな。場を探せ。</p>

          <button
            className="primary-button"
            type="button"
            onClick={() => setCurrentScreen("explore")}
          >
            部屋を歩いてみる
          </button>
        </div>
      </section>

      <section
        id="screen-explore"
        className="screen"
        hidden={currentScreen !== "explore"}
        aria-hidden={currentScreen !== "explore"}
      >
        <div className="placeholder-content">
          <h2>部屋を探す</h2>

          <button
            className="secondary-button"
            type="button"
            onClick={() => setCurrentScreen("home")}
          >
            入口へ戻る
          </button>
        </div>
      </section>
    </main>
  );
}
