package com.store.web.app.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "physical_products")
@EqualsAndHashCode(callSuper = true)
public class PhysicalProduct extends Product {
    @Column(name = "delivery_cost")
    private double deliveryCost;
}
