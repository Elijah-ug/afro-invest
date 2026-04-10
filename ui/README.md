
TECH STACK (DO NOT CHANGE):                                                                                                                         
  - React 19 + Vite                                                                                                                                   
  - TypeScript                                                                                                                                        
  - TailwindCSS                                                                                                                                       
  - shadcn/ui (Radix-based components)                                                                                                                
  - Redux Toolkit + RTK Query                                                                                                                         
  - React Router DOM v7                                                                                                                               
  - React Toastify for notifications                                                                                                                  
  - Lucide React for icons                                                                                                                            
  - Embla Carousel for sliders                                                                                                                        
  - date-fns for date handling 

  GOAL:                                                                                                                                               
  Build a clean, modern fintech-style UI similar to a real investment dashboard (not a demo app).                                                     
                                                                                                                                                      
  GENERAL RULES:                                                                                                                                      
  - Use TypeScript everywhere                                                                                                                         
  - Use functional components only                                                                                                                    
  - Keep components modular and reusable                                                                                                              
  - Follow feature-based folder structure                                                                                                             
  - Use Tailwind for styling (no inline CSS)                                                                                                          
  - Use shadcn/ui components wherever possible                                                                                                        
  - Use Lucide React for all icons (no emoji icons)                                                                                                   
  - Use React Toastify for all success/error notifications                                                                                            
  - Use RTK Query only for API structure (mock endpoints for now)                                                                                     
  - Ensure responsive design (mobile-first)     

                                                                                                                                                       
  APP PAGES:                                                                                                                                          
  1. Home (landing page)                                                                                                                              
  2. Investment Plans page                                                                                                                            
  3. About page                                                                                                                                       
  4. Profit Calculator page                                                                                                                           
  5. Auth pages (Login/Register)                                                                                                                      
  6. Dashboard (protected route)  

  UI REQUIREMENTS:                                                                                                                                    
  - Fintech-style clean design (dark + light friendly)                                                                                                
  - Cards with hover effects for investment plans                                                                                                     
  - Hero section with CTA                                                                                                                             
  - Stats section (users, investments, ROI)                                                                                                           
  - Dashboard with sidebar navigation                                                                                                                 
  - Toast notifications for user actions                                                                                                              
  - Loading states and skeletons where needed  

  ROUTING:                                                                                                                                            
  - Use React Router DOM v7                                                                                                                           
  - Create protected routes for Dashboard                                                                                                             
  - Create Layout system:                                                                                                                             
    - MainLayout (public pages)                                                                                                                       
    - DashboardLayout (authenticated area) 

    STATE MANAGEMENT:                                                                                                                                   
  - Use Redux Toolkit for auth state                                                                                                                  
  - Use RTK Query for API structure (mock data for now)                                                                                               
                                                                                                                                                      
  ICON RULES:                                                                                                                                         
  - Use Lucide React icons everywhere (no emoji, no SVG files manually)                                                                               
                                                                                                                                                      
  NOTIFICATIONS:                                                                                                                                      
  - Use React Toastify for:                                                                                                                           
    - login success/failure                                                                                                                           
    - investment actions                                                                                                                              
    - form validation feedback                                                                                                                        
                                                                                                                                                      
  START NOW:                                                                                                                                          
  Step 1:                                                                                                                                             
  Create a proper folder structure for scalable production app:                                                                                       
  - components/                                                                                                                                       
  - layouts/                                                                                                                                          
  - pages/                                                                                                                                            
  - features/                                                                                                                                         
  - store/                                                                                                                                            
  - services/                                                                                                                                         
  - hooks/                                                                                                                                            
  - utils/                                                                                                                                            
  - routes/               

   Step 2:                                                                                                                                             
  Set up routing system with all pages and layouts.                                                                                                   
                                                                                                                                                      
  Step 3:                                                                                                                                             
  Create base layouts:                                                                                                                                
  - MainLayout (Navbar + Footer)                                                                                                                      
  - DashboardLayout (Sidebar + Topbar)                                                                                                                
                                                                                                                                                      
  Step 4:                                                                                                                                             
  Create placeholder pages with proper UI structure (not blank pages).                                                                                
                                                                                                                                                      
  Do this step-by-step and explain each step before generating code.  