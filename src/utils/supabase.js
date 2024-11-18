import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://whixazwnyuvashowzlby.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoaXhhendueXV2YXNob3d6bGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MTA2MzAsImV4cCI6MjA0Njk4NjYzMH0.QHRM9DTXTbZraGZ5XphJesbYov3-szzGfwpTNwdTq-s";
const supabase = createClient(supabaseUrl, supabaseKey);

// Upload Avatar to Supabase Bucket
export const uploadToSupabase = async (file) => {
  console.log("FILE",file)
  const fileName = `${Date.now()}_${file.name}`;

  console.log("File Properties:", {
    name: file.name,
    size: file.size,
    type: file.type,
  });
  const videoPreview = URL.createObjectURL(file);
console.log("Video Preview URL:", videoPreview);
 


  let { data, error } = await supabase.storage
    .from("wechat")
    .upload(fileName, file, {
      upsert: false,
      cacheControl: "3600",
      contentType: file.type
    });

    console.log("UPLOAD RESULT:", { data, error });

  if (error) {
    throw new Error("Error uploading file: " + error.message);
  }

  const urlData = supabase.storage.from("wechat").getPublicUrl(fileName);

  return urlData?.data?.publicUrl; // Return the public URL of the uploaded avatar
};
