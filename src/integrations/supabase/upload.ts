import { supabase } from './client';

export async function uploadProjectImage(projectId: string, file: File) {
  const filePath = `${projectId}/${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage.from('portfolio-images').upload(filePath, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) throw error;
  return data;
}

export async function listProjectImages(projectId: string) {
  const { data, error } = await supabase.storage.from('portfolio-images').list(projectId, { limit: 100 });
  if (error) throw error;
  return data || [];
}

export function getPublicUrl(path: string) {
  return supabase.storage.from('portfolio-images').getPublicUrl(path).data.publicUrl;
}

export async function deleteProjectImage(path: string) {
  const { error } = await supabase.storage.from('portfolio-images').remove([path]);
  if (error) throw error;
} 