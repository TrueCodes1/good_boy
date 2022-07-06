import React from 'react';
import styled from 'styled-components';

// IMPORTING ASSETS
import dogLogo from '../assets/dog_vector.svg';

const MainParent = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: stretch; 
    border-top: 1px solid #2f2f2f16;
    min-width: 100%;
    max-width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 60px 0;

`

const BrandingPart = styled.div`

    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    margin: 0;

`

const BrandingLogo = styled.img`

    min-height: 37pt;
    max-height: 37pt;
    margin-right: 10px;
    margin-top: 10px;

`

const BrandingName = styled.h2`

    color: #321E0F;
    font-size: 24pt;

`

const ParentOfColumns = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content:  center;
    width: 100%;
    margin-top: 50px;

`

const ColumnWithText = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 200px;
    height: fit-content;
    padding: 0;

`

const ChildOfColumn = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;

`

const Heading = styled.h3`

    color: #2F2F2F;
    font-size: 12pt;
    font-weight: 800;
    margin: 0;
    margin-bottom: 20px;

`

const UnorderedList = styled.ul`

    padding: 0;
    margin: 0;

`

const ListItem = styled.li`

    list-style: none;
    padding: 10px 0;
    color: #585757;
    font-size: 12pt;
    transition: .25s ease-in-out;
    cursor: pointer;

    &:hover {

        transition: .25s ease-in-out;
        color: #2F2F2F;

    }

`

const SmallText = styled.p`

    color: #585757;
    font-size: 12pt;
    line-height: 1.3em;

`

export default function Footer() {
  return (
    <>
    
        {/* THE WHOLE FOOTER */}
        <MainParent>

            {/* THE LEFT PART OF THE FOOTER WHERE BRANDING IS PLACED */}
            <BrandingPart>
            
                {/* THE BRANDING LOGO */}
                <BrandingLogo src={  dogLogo } />
                {/* THE BRANDING NAME */}
                <BrandingName> Good boy </BrandingName>
            
            </BrandingPart>

            {/* THE RIGHT SIDE OF THE FOOTER WHERE THE TEXT IS PLACED */}
            <ParentOfColumns>
            
                {/* THE TEXT PART IS DIVIDED INTO 3 COLUMNS */}
                {/* THE FIRST COLUMN IS DIFFERENT, HAS AN UNORDERED LIST IN IT */}
                <ChildOfColumn>

                    {/* INSIDE EACH OF THE COLUMNS THERE IS A WRAPPER DIV SO THAT THE COLUMNS
                    ARE FLEX-STRETCHED BUT THE INNER CONTENT IS FLEX-ENDED TO THE RIGHT SIDE */}
                    <ColumnWithText>
                    
                        {/* THE HEADING */}
                        <Heading>Nadácia GoodBoy</Heading>
                        
                        {/* THE UNORDERED LIST OF ROUTES */}
                        <UnorderedList>
                        
                            <ListItem>O projekte</ListItem>
                            <ListItem>Ako na to</ListItem>
                            <ListItem>Kontakt</ListItem>
                        
                        </UnorderedList>
                    
                    </ColumnWithText>

                </ChildOfColumn>
                
                <ChildOfColumn>
                    
                    <ColumnWithText>
                    
                        <Heading>Nadácia GoodBoy</Heading>

                        {/* THE TEXT OF THIS COLUMNS */}
                        <SmallText>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt.
                        </SmallText>
                    
                    </ColumnWithText>
                    
                </ChildOfColumn>
                
                <ChildOfColumn>
                    
                    <ColumnWithText>
                    
                        <Heading>Nadácia GoodBoy</Heading>

                        <SmallText>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt.
                        </SmallText>
                    
                    </ColumnWithText>
                    
                </ChildOfColumn>
            
            </ParentOfColumns>

        </MainParent>
    
    </>
  )
}
