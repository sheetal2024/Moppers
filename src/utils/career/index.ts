export interface JobListing {
  id: number;
  title: string;
  overview: string;
  responsibilities: string[];
  applyInfo: string;
}

export const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Facility Manager",
    overview:
      "As a Facility Manager at MR Corporate, you will be responsible for overseeing and managing the efficient operation of various facilities under our care. Your primary focus will be on ensuring optimal functionality, maintenance, and safety standards while fostering strong client relationships and leading a team of facility staff.",
    responsibilities: [
      "Facility Operations Management: Supervise and manage day-to-day facility operations, ensuring seamless functionality, maintenance, and adherence to safety standards.",
      "Client Relationship Management: Build and maintain strong relationships with clients, understanding their needs, addressing concerns, and ensuring high satisfaction levels.",
      "Team Leadership: Lead and motivate a team of facility staff, providing guidance, training, and support to ensure productivity and efficiency.",
      "Budgeting and Resource Management: Develop and manage budgets, oversee resource allocation, and optimize cost-effective solutions for facility management.",
      "Compliance and Safety: Ensure compliance with regulatory requirements, health, and safety standards within the facilities.",
      "Vendor Management: Collaborate with external vendors and contractors, negotiating contracts, and overseeing their work quality and performance.",
    ],
    applyInfo:
      "To apply for the Facility Manager position, please email your CV to admin@mrcorporate.in.",
  },
  {
    id: 2,
    title: "HR Manager",
    overview:
      "As an HR Manager at MR Corporate, you will play a crucial role in managing human resources functions, fostering a positive work environment, and supporting the organization's growth. You'll be responsible for overseeing HR operations, implementing policies, and driving initiatives to support the company's goals.",
    responsibilities: [
      "Recruitment and Talent Acquisition: Lead the recruitment process, from sourcing and interviewing candidates to onboarding new hires. Develop strategies to attract top talent.",
      "Employee Relations: Handle employee relations matters, address grievances, and ensure a healthy and positive work environment.",
      "Performance Management: Implement performance appraisal systems, provide guidance on performance improvement, and facilitate career development plans.",
      "Training and Development: Identify training needs, coordinate training programs, and support the professional growth of employees.",
      "HR Policies and Compliance: Develop and enforce HR policies, ensure legal compliance, and keep abreast of labor laws and regulations.",
      "Benefits Administration: Manage employee benefits programs, including health insurance, retirement plans, and other perks.",
      "HR Analytics and Reporting: Analyze HR data to provide insights and recommendations for improving HR processes and strategies.",
    ],
    applyInfo:
      "To apply for the HR Manager position, please email your CV to admin@mrcorporate.in.",
  },
];
