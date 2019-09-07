import Layout from '../components/MyLayout.js'

export default function Upload() {
  return (
    <Layout>
      <p>Select the video to upload</p>
      <input id="image-file" type="file" />
    </Layout>
  )
}
