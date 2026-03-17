export const MOCK_MEDICAL_RECORDS = {
  // Mock data for Patient ID: 1 (Jennifer Robinson)
  "1": [{
    _id: "rec-1",
    medication: [
      { medica: "Amoxicillin", value: "500mg", number: "3x daily", ill: "Respiratory Infection" },
      { medica: "Lisinopril", value: "10mg", number: "1x daily", ill: "Hypertension" }
    ],
    prescripton: [
      { description: "Complete the full course of antibiotics. Drink plenty of water.", doctor: "Dr. Sarah Johnson" },
      { description: "Monitor blood pressure daily and record in dashboard.", doctor: "Dr. Michael Chen" }
    ],
    allergie: [
      { allergie: "Penicillin" },
      { allergie: "Latex" }
    ],
    probActive: [
      { probleme: "Chronic Sinusitis", date: "2023-11-15" },
      { probleme: "Mild Hypertension", date: "2023-08-20" }
    ],
    ancienProb: [
      { probleme: "Appendectomy", date: "2018-04-12" },
      { probleme: "Fractured Wrist", date: "2015-02-28" }
    ],
    familiale: [
      { ant: "Type 2 Diabetes (Mother)" },
      { ant: "Heart Disease (Father)" }
    ],
    resLabo: [
      { test: "CBC Panel", result: "Normal ranges except slightly elevated WBC" },
      { test: "Lipid Profile", result: "Total Cholesterol: 190 mg/dL" }
    ]
  }],

  // Mock data for Patient ID: 2 (Terry Baker)
  "2": [{
    _id: "rec-2",
    medication: [
      { medica: "Metformin", value: "850mg", number: "2x daily", ill: "Diabetes" },
      { medica: "Atorvastatin", value: "20mg", number: "1x daily", ill: "High Cholesterol" }
    ],
    prescripton: [
      { description: "Regular exercise recommended. Follow low-glycemic diet.", doctor: "Dr. Sarah Johnson" }
    ],
    allergie: [
      { allergie: "Sulfa Drugs" }
    ],
    probActive: [
      { probleme: "Type 2 Diabetes", date: "2022-05-10" }
    ],
    ancienProb: [
      { probleme: "Cataract Surgery", date: "2021-09-15" }
    ],
    familiale: [
      { ant: "Glaucoma" }
    ],
    resLabo: [
      { test: "HbA1c", result: "6.8%" }
    ]
  }],

  // Default fallback for any other ID (Jennifer Robinson's data)
  "default": [{
    _id: "rec-1",
    medication: [
      { medica: "Amoxicillin", value: "500mg", number: "3x daily", ill: "Respiratory Infection" },
      { medica: "Lisinopril", value: "10mg", number: "1x daily", ill: "Hypertension" }
    ],
    prescripton: [
      { description: "Complete the full course of antibiotics. Drink plenty of water.", doctor: "Dr. Sarah Johnson" },
      { description: "Monitor blood pressure daily and record in dashboard.", doctor: "Dr. Michael Chen" }
    ],
    allergie: [
      { allergie: "Penicillin" },
      { allergie: "Latex" }
    ],
    probActive: [
      { probleme: "Chronic Sinusitis", date: "2023-11-15" },
      { probleme: "Mild Hypertension", date: "2023-08-20" }
    ],
    ancienProb: [
      { probleme: "Appendectomy", date: "2018-04-12" },
      { probleme: "Fractured Wrist", date: "2015-02-28" }
    ],
    familiale: [
      { ant: "Type 2 Diabetes (Mother)" },
      { ant: "Heart Disease (Father)" }
    ],
    resLabo: [
      { test: "CBC Panel", result: "Normal ranges except slightly elevated WBC" },
      { test: "Lipid Profile", result: "Total Cholesterol: 190 mg/dL" }
    ]
  }]
};

export const MOCK_BLOCKCHAIN_NOTES = {
  "1": {
    addressData: {
      addressTransactions: [
        { doctor: "Dr. Sarah Johnson", description: "Patient shows good progress with hypertension management. Adjusted Lisinopril dose.", date: new Date().toISOString() },
        { doctor: "Dr. Michael Chen", description: "Initial consultation for respiratory symptoms.", date: "2023-11-10T10:00:00Z" }
      ]
    }
  },
  "2": {
    addressData: {
      addressTransactions: [
        { doctor: "Dr. Sarah Johnson", description: "Routine diabetic checkup. HbA1c is stable.", date: "2023-12-01T14:30:00Z" }
      ]
    }
  }
};

export const MOCK_DOCTORS = [
  { 
    _id: 'd1', 
    firstname: 'Sarah', 
    lastname: 'Johnson', 
    specialty: 'General Practitioner', 
    address: 'Suite 450, Medical Plaza, San Francisco, CA 94115', 
    cabinet: 'Family Health Center',
    experience: '10+', 
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@nearestdoctor.com',
    birthdate: '1985-05-12',
    gender: 'Female',
    about: 'Dr. Sarah Johnson is a dedicated General Practitioner with over 10 years of experience in providing comprehensive healthcare to patients of all ages. She specializes in preventitive medicine and chronic disease management.',
    education: [
      { school: 'Harvard Medical School', degree: 'Doctor of Medicine (MD)', year: '2008 - 2012' },
      { school: 'University of California, Berkeley', degree: 'BS in Biology', year: '2004 - 2008' }
    ],
    specializations: [
      'Preventive Health',
      'Chronic Disease Management',
      'Family Medicine',
      'Nutritional Counseling'
    ],
    achievements: [
      'Excellence in Primary Care Award (2021)',
      'Board Certified in Family Medicine',
      'Lead Researcher in Community Health Initiative'
    ],
    cabinet_images: [
      'https://images.unsplash.com/photo-1519494351230-610192e2055b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop'
    ],
    picture: 'https://images.unsplash.com/photo-1559839734-2b71f15367a0?w=400&h=400&fit=crop' 
  },
  { 
    _id: 'd2', 
    firstname: 'Michael', 
    lastname: 'Chen', 
    specialty: 'Cardiologist', 
    address: 'Floor 12, Heart & Vascular Institute, New York, NY 10016', 
    cabinet: 'Metropolitan Cardiology',
    experience: '15+', 
    phone: '+1 (555) 987-6543',
    email: 'michael.chen@nearestdoctor.com',
    about: 'Dr. Michael Chen is a world-renowned Cardiologist specializing in interventional cardiology and heart failure management.',
    education: [
      { school: 'Johns Hopkins School of Medicine', degree: 'Doctor of Medicine (MD)', year: '2003 - 2007' }
    ],
    specializations: [
      'Interventional Cardiology',
      'Heart Failure Management',
      'Echocardiography'
    ],
    achievements: [
      'Top Cardiologist in NY Award (2022)',
      'Fellow of the American College of Cardiology'
    ],
    cabinet_images: [
      'https://images.unsplash.com/photo-1533091091830-ef4b9ca809bd?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    ],
    picture: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop' 
  },
  { 
    _id: 'd3', 
    firstname: 'Emily', 
    lastname: 'White', 
    specialty: 'Pediatrician', 
    address: 'Building B, West Side Pediatrics, Chicago, IL 60614', 
    cabinet: 'Little Heroes Clinic',
    experience: '8+', 
    phone: '+1 (555) 555-0103',
    email: 'emily.white@nearestdoctor.com',
    about: 'Dr. Emily White is a compassionate Pediatrician dedicated to the health and well-being of children from birth through adolescence.',
    specializations: [
      'Neonatal Care',
      'Childhood Immunizations',
      'Adolescent Medicine'
    ],
    cabinet_images: [
      'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1502740479091-635887520276?w=400&h=300&fit=crop'
    ],
    picture: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop' 
  },
  { 
    _id: 'd4', 
    firstname: 'Robert', 
    lastname: 'Brown', 
    specialty: 'Dermatologist', 
    address: 'Room 302, Skin Care Center, Los Angeles, CA 90025', 
    cabinet: 'Dermacare Professionals',
    experience: '12+', 
    phone: '+1 (555) 555-0104',
    email: 'robert.brown@nearestdoctor.com',
    about: 'Dr. Robert Brown specialized in medical and cosmetic dermatology, providing advanced treatments for skin conditions.',
    specializations: [
      'Skin Cancer Screening',
      'Laser Surgery',
      'Cosmetic Procedures'
    ],
    cabinet_images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=300&fit=crop'
    ],
    picture: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop' 
  },
  { 
    _id: 'd5', 
    firstname: 'Jessica', 
    lastname: 'Lee', 
    specialty: 'Neurologist', 
    address: 'Level 4, Neurosciences Wing, Boston, MA 02114', 
    cabinet: 'Eastern Neurology Group',
    experience: '20+', 
    phone: '+1 (555) 555-0105',
    email: 'jessica.lee@nearestdoctor.com',
    about: 'Dr. Jessica Lee is an expert Neurologist with two decades of experience in treating complex neurological disorders.',
    specializations: [
      'Epilepsy Management',
      'Movement Disorders',
      'Neuro-oncology'
    ],
    cabinet_images: [
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop'
    ],
    picture: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop' 
  }
];

export const MOCK_PATIENTS = [
  { _id: "1", firstname: "Jennifer", lastname: "Robinson", phone: "+1 (555) 000-1111", email: "jennifer.r@example.com", birthdate: "1992-08-15" },
  { _id: "2", firstname: "Terry", lastname: "Baker", phone: "+1 (555) 000-2222", email: "terry.b@example.com", birthdate: "1978-03-22" },
  { _id: "3", firstname: "Jessica", lastname: "White", phone: "+1 (555) 000-3333", email: "jessica.w@example.com", birthdate: "1985-11-30" },
  { _id: "4", firstname: "Robert", lastname: "Smith", phone: "+1 (555) 000-4444", email: "robert.s@example.com", birthdate: "1990-05-12" },
  { _id: "5", firstname: "Mary", lastname: "Davis", phone: "+1 (555) 000-5555", email: "mary.d@example.com", birthdate: "1982-01-25" }
];

export const MOCK_BLOGS = [
  {
    _id: "b1",
    title: "Understanding Cardiovascular Health in 2024",
    description: "A comprehensive guide to maintaining heart health through modern diagnostic tools and lifestyle changes. We explore the latest research in preventative cardiology and how to interpret common symptoms.",
    category: "Cardiology",
    dateCreation: "2024-03-01T10:00:00Z",
    picture: "https://images.unsplash.com/photo-1505751172107-1d70081d58d4?w=800&fit=crop",
    author: "Dr. Michael Chen"
  },
  {
    _id: "b2",
    title: "Common Pediatric Myths Debunked",
    description: "Addressing frequent concerns parents have about childhood vaccinations, nutrition, and early development. This article provides evidence-based answers to help parents make informed decisions.",
    category: "Pediatrics",
    dateCreation: "2024-02-15T14:30:00Z",
    picture: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&fit=crop",
    author: "Dr. Emily White"
  },
  {
    _id: "b3",
    title: "Advancements in Neuro-rehabilitation",
    description: "Exploring new therapeutic techniques and technologies for patients recovering from stroke or traumatic brain injury. Learn about neuroplasticity and the future of rehabilitation medicine.",
    category: "Neurology",
    dateCreation: "2024-02-10T09:15:00Z",
    picture: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&fit=crop",
    author: "Dr. Jessica Lee"
  }
];

export const MOCK_APPOINTMENTS = [
  {
    _id: "app1",
    Firstname: "Jennifer",
    Lastname: "Robinson",
    Email: "jennifer.r@example.com",
    Phone: "+1 (555) 000-1111",
    StartDate: new Date(new Date().setHours(10, 0, 0, 0)).toISOString(),
    EndDate: new Date(new Date().setHours(11, 0, 0, 0)).toISOString(),
    status: "Confirmed"
  },
  {
    _id: "app2",
    Firstname: "Robert",
    Lastname: "Smith",
    Email: "robert.s@example.com",
    Phone: "+1 (555) 000-4444",
    StartDate: new Date(new Date().setHours(14, 30, 0, 0)).toISOString(),
    EndDate: new Date(new Date().setHours(15, 0, 0, 0)).toISOString(),
    status: "Pending"
  },
  {
    _id: "app3",
    Firstname: "Mary",
    Lastname: "Davis",
    Email: "mary.d@example.com",
    Phone: "+1 (555) 000-5555",
    StartDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    EndDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    status: "Confirmed"
  }
];
