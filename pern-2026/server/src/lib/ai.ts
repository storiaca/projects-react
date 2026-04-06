import OpenAi from "openai";
import { TrainingPlan, UserProfile } from "../../types";

export async function generateTrainingPlan(
  profile: UserProfile | Record<string, any>,
): Promise<TrainingPlan> {
  // Normalize profile data
  const normalizedProfile: UserProfile = {
    goal: profile.goal || "bulk",
    experience: profile.experience || "intermediate",
    days_per_week: profile.days_per_week || 4,
    session_length: profile.session_length || 60,
    equipment: profile.equipment || "full_gym",
    injuries: profile.injuries || null,
    preferred_split: profile.preferred_split || "upper_lower",
  };

  const apiKey = process.env.OPEN_ROUTER_KEY;

  if(!apiKey) {
    throw new Error("OPEN_ROUTER_KEY is not set in enviroment variables")
  }
}
