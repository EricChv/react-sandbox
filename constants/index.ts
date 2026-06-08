export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "/images/resume-1.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: {
        score: 90,
        tips: [],
      },
      toneAndStyle: {
        score: 90,
        tips: [],
      },
      content: {
        score: 90,
        tips: [],
      },
      structure: {
        score: 90,
        tips: [],
      },
      skills: {
        score: 90,
        tips: [],
      },
    },
  },
]

export const AIResponseFormat = `
Return ONLY valid JSON in this exact structure:

{
  "overallScore": 0,
  "ATS": {
    "score": 0,
    "tips": [
      {
        "type": "good | improve",
        "tip": "string"
      }
    ]
  },
  "toneAndStyle": {
    "score": 0,
    "tips": [
      {
        "type": "good | improve",
        "tip": "short title",
        "explanation": "detailed explanation"
      }
    ]
  },
  "content": { ...same shape... },
  "structure": { ...same shape... },
  "skills": { ...same shape... }
}
`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `
You are an expert ATS resume reviewer.

Analyze the resume against the target role and return structured feedback.

Be honest and critical. Low scores are acceptable and expected if the resume is weak.

Use the job title and job description to evaluate relevance, ATS compatibility, skills alignment, and clarity.

Job Title:
${jobTitle}

Job Description:
${jobDescription}

Return ONLY valid JSON following this exact format:
${AIResponseFormat}

Rules:
- No markdown
- No backticks
- No extra commentary
- Output must be valid JSON
`;