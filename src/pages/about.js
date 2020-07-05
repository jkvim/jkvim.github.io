import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>About</h1>
    <div className="about__body">
      <h2 className="about__body-title">个人作品</h2>
      <ul>
        <li>
          <a href="https://one-habit-landing-page.vercel.app/">One Habit</a>
        </li>
      </ul>
    </div>
  </Layout>
)
