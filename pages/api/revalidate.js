export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body) {
    return res.status(422).json({ message: "Invalid request body" });
  }

  try {
    const typename = req.body.data.__typename;
    const slug = req.body.data.slug;
    await res.revalidate("/");
    if (typename === "Quiz") {
      // const id = req.body.data.category.id;
      // const cSlug = await getCategoryFormId(id);
      // await res.revalidate(`/category/${cSlug}`);
      // await res.revalidate(`/category/${cSlug}/quiz/${slug}`);
    } else if (typename === "Category") {
      await res.revalidate("/category");
      await res.revalidate(`/category/${slug}`);
    }
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}
